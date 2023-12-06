import { cn } from "@/lib/utils";
import { Loader2Icon } from "lucide-react";
import { FC, FormEvent, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
export type NewsletterFormProps = { className?: string };
export const NewsletterForm: FC<NewsletterFormProps> = ({ className }) => {
  const [state, setState] = useState<"active" | "loading" | "error">("active");
  const [subscriptionState, setSubscriptionState] = useState<
    "active" | "cancelled" | "inactive"
  >();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubscriptionState(undefined);
    const formData = new FormData(e.currentTarget);
    formData.append("api_key", process.env.NEXT_PUBLIC_CONVERTKIT_API_KEY);
    setState("loading");
    const res = await fetch(
      `https://api.convertkit.com/v3/forms/${process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID}/subscribe`,
      {
        method: "POST",
        body: formData,
      },
    )
      .then((res) => {
        setState("active");
        if (res.status !== 200) setState("error");
        return res.json();
      })
      .catch(() => {
        setState("error");
      });
    setSubscriptionState(res.subscription.state);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("m-1 flex flex-col gap-2", className)}
    >
      <h6 className="-ms-1 text-xl sm:text-2xl">Subscribe to my Newsletter</h6>
      <Input required placeholder="First Name" name="first_name" />
      <Input required type="email" placeholder="Your Email" name="email" />
      <div className="flex justify-between gap-1">
        <p
          className={cn(
            "ps-2 pt-2 text-lg",
            state == "error" && "text-red-400 ",
          )}
        >
          {subscriptionState === "cancelled" &&
            "Succeed! Please check your inbox to confirm subscription."}
          {subscriptionState === "inactive" &&
            "Succeed! Please check your inbox to confirm subscription."}
          {subscriptionState === "active" && "Already subscribed!"}
          {state === "error" && "Something went wrong, please try again!"}
        </p>
        <Button type="submit">
          Subscribe{" "}
          {state === "loading" && <Loader2Icon className="ms-1 animate-spin" />}
        </Button>
      </div>
    </form>
  );
};
