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
              title="Heat Stroke Alert"
              description="designed to monitor real-time weather conditions, providing alerts when the temperature reaches dangerous levels that could lead to heatstroke."
              imageUrl="https://camo.githubusercontent.com/2c6d7de0fb93365f29cad9ddd9c6ca9e1855f0fd5720027cb076d7fd03562843/68747470733a2f2f692e696d6775722e636f6d2f3169444c6174372e706e67"
              className="lg:row-span-2"
              css="rounded-t-4xl md:rounded-xl md:rounded-tl-4xl"
              lgTitle="Heat Stroke Alert"
              lgDescription="The HeatStroke Alert app is designed to monitor real-time weather conditions, providing alerts when the temperature reaches dangerous levels that could lead to heatstroke. This application aims to help users stay safe by notifying them of extreme heat conditions in their location, enabling proactive steps to avoid heat-related illnesses. The app is developed as part of the mobile development course at IAU CCIT, Semester 8."
              lgImageUrl={[
                "https://camo.githubusercontent.com/2c6d7de0fb93365f29cad9ddd9c6ca9e1855f0fd5720027cb076d7fd03562843/68747470733a2f2f692e696d6775722e636f6d2f3169444c6174372e706e67",
                "https://camo.githubusercontent.com/e4ac671f7defcca137f5063d3c6afb2418d9cf2ea5bf411218364c9676028ff9/68747470733a2f2f692e696d6775722e636f6d2f654f513662396e2e706e67",
                "https://camo.githubusercontent.com/e019f85776996f48cab6b7cd2e01bb62b298aca8e74560209fae2a04a6abe8c3/68747470733a2f2f692e696d6775722e636f6d2f5a526d42466f782e706e67", ]}
              lgImageAlt="Heat Stroke Alert photo"
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
              css="md:rounded-xl md:rounded-tr-4xl"
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
            className="lg:col-span-2"
          >
            <CardCol
              title="All-in-One Solution"
              description="Integrate seamlessly..."
              imageUrl="https://tailwindui.com/plus/img/component-images/bento-03-performance.png"
              className="lg:col-span-2"
              css=" md:rounded-xl md:rounded-bl-4xl"
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
              css="rounded-b-4xl md:rounded-xl md:rounded-br-4xl"
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
