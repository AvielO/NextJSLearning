import Image from "next/image";

import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/imageOne.jpg"
          alt="An image showing Max"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Noa</h1>
      <p>
        Hello there, I'm learning nextJS and deployed my first application.
      </p>
    </section>
  );
};
export default Hero;
