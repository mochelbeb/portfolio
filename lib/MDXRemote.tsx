"use client";
import {
  MDXRemote as MDXRemotePrimitive,
  MDXRemoteProps as MDXRemotePrimitiveProps,
} from "next-mdx-remote";
import { FC } from "react";
export type MDXRemoteProps = MDXRemotePrimitiveProps;
export const MDXRemote: FC<MDXRemoteProps> = ({ ...props }) => {
  return <MDXRemotePrimitive {...props} />;
};
