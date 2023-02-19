"use client";
import React from "react";
import { useEffect } from "react";
import useSWR from "swr";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  return res.json();
};

type ViewCounterProps = {
  slug: string;
  blogPage: boolean;
};

const ViewCounter: React.FC<ViewCounterProps> = ({
  slug,
  blogPage = false,
}) => {
  const { data } = useSWR(`/api/${slug}`, fetcher);
  const views = new Number(data?.total);

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/${slug}`, {
        method: "POST",
      });

    if (blogPage) {
      registerView();
    }
  }, [slug]);
  return (
    <span> {`${views > 0 ? views.toLocaleString() : "---"} views`} </span>
    //Guardar el anterior en cada una de las posts y guardarlo en el localStorage
  );
};
export default ViewCounter;
