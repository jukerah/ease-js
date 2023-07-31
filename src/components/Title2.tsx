import React from "../../modules/react";

interface TitleProps {
  title: string;
  status: boolean;
}

export const Title2 = React.createComponent(({ status, title }: TitleProps) => {
  return (
      <div>
        <h1>{title}</h1>
        <p>props: {status}</p>
      </div>
  )
})