import React from "react"
import BackgroundImage from "gatsby-background-image"

export default function BackgroundSection({
  img,
  styleClass,
  title,
  children,
}) {
  const styleClass_d = styleClass ? styleClass : "background-default"
  const title_d = title ? title : "default title"
  return (
    <BackgroundImage
      preserveStackingContext="true"
      className={styleClass_d}
      fluid={img}
    >
      <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold">
        {title_d}
      </h1>
      {children}
    </BackgroundImage>
  )
}
