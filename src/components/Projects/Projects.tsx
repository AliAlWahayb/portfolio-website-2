import CardCol from "./Small/CardCol";
import CardCube from "./Small/CardCube";
import CardRow from "./Small/CardRow";
import { motion } from "framer-motion";

export default function Projects() {
  const childDuration = 0.3
  const variants = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },

  }
  return (
    <div className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-text-base">
          Deploy faster
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-secondary-text-base sm:text-5xl">
          Everything you need to deploy your app
        </p>

        {/* Grid Container */}
        <motion.div
          initial="initial"
          whileInView="whileInView"
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true }}
          className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-3 relative "
        >
          <motion.div
            layout
            transition={{ duration: childDuration }}
            variants={variants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="lg:row-span-2"
          >
            <CardRow
              title="Deploy in minutes"
              description="Lorem ipsum..."
              imageUrl="https://tailwindui.com/plus/img/component-images/bento-03-mobile-friendly.png"
              className="lg:row-span-2"
              css="rounded-s-4xl"
              lgTitle="large Fast & Secure"
              lgDescription="large Optimize your deployments..."
              lgImageUrl="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              lgImageAlt="Fast & Secure"
            />
          </motion.div>
          <motion.div
            layout
            transition={{ duration: childDuration }}
            variants={variants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <CardCube
              title="Fast & Secure"
              description="Optimize your deployments..."
              imageUrl="https://tailwindui.com/plus/img/component-images/bento-03-performance.png"
              imageAlt="Fast & Secure"
              className="lg:col-span-1"
              css=""
              lgTitle="large Fast & Secure"
              lgDescription="large Optimize your deployments..."
              lgImageUrl="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              lgImageAlt="Fast & Secure"
            />
          </motion.div>
          <motion.div
            layout
            transition={{ duration: childDuration }}
            variants={variants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <CardCube
              title="Fast & Secure"
              description="Optimize your deployments..."
              imageUrl="https://tailwindui.com/plus/img/component-images/bento-03-performance.png"
              imageAlt="Fast & Secure"
              className="lg:col-span-1"
              css="rounded-tr-4xl"
              lgTitle="large Fast & Secure"
              lgDescription="large Optimize your deployments..."
              lgImageUrl="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              lgImageAlt="Fast & Secure"
            />
          </motion.div>
          <motion.div
            layout
            transition={{ duration: childDuration }}
            variants={variants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <CardCol
              title="All-in-One Solution"
              description="Integrate seamlessly..."
              imageUrl="https://tailwindui.com/plus/img/component-images/bento-03-performance.png"
              className="lg:col-span-2"
              css="rounded-br-4xl"
              lgTitle="large Fast & Secure"
              lgDescription="large Optimize your deployments..."
              lgImageUrl="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              lgImageAlt="Fast & Secure"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
