import React from "react"
import { Link } from "gatsby"
import Title from "../global/title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center div">
            <p className="lead text-muted mb--5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              nostrum maiores atque beatae culpa veniam tempora error in
              doloribus earum? Aspernatur quae accusantium nobis odit minus
              dolorum voluptas, iure reprehenderit eum delectus minima
              perferendis fugiat illum quod dicta placeat porro quas sint veniam
              mollitia possimus tenetur dignissimos officiis? Quae, possimus?
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
