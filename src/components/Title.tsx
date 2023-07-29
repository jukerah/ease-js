import React from "../../modules/ease"

interface TitleProps {
  title: string;
}

export const Title = React.component(({ title }: TitleProps) => {
  return (
      <h1>{title}</h1>
  )
})