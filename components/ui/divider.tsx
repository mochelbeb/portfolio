export type DividerProps = React.JSX.IntrinsicElements["hr"];

export const Divider = ({ className, ...props }: DividerProps) => {
  return (
    <hr className="my-6 block border-b-2 border-t-0 border-border" {...props} />
  );
};
