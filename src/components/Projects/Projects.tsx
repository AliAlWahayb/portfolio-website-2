import CardCol from "./Small/CardCol";
import CardCube from "./Small/CardCube";
import CardRow from "./Small/CardRow";

export default function Projects() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-indigo-600">
          Deploy faster
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
          Everything you need to deploy your app
        </p>

        {/* Modular Grid Layout */}
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-3">
          {/* First Column: CardRow (Spans 2 rows) */}
          <CardRow
            title="Deploy in minutes"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
            imageUrl="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            className="lg:row-span-2"
            css="rounded-xl rounded-s-3xl"
          />

          {/* Second Column: Two adjacent CardCube components */}
          <CardCube
            title="Fast & Secure"
            description="Optimize your deployments with speed and security."
            imageUrl="https://tailwindui.com/plus/img/component-images/bento-03-performance.png"
            className="lg:col-span-1"
            css="rounded-xl"
            
          />
          <CardCube
            title="Scalability"
            description="Scale your apps efficiently with cloud integration."
            imageUrl="https://tailwindui.com/plus/img/component-images/bento-03-performance.png"
            className="lg:col-span-1"
            css="rounded-xl rounded-tr-3xl"
          />

          {/* Third Row: CardCol spanning 2 columns under the cubes */}
          <CardCol
            title="All-in-One Solution"
            description="Integrate seamlessly with our all-in-one toolkit."
            imageUrl="https://tailwindui.com/plus/img/component-images/bento-03-performance.png"
            className="lg:col-span-2"
            css="rounded-xl rounded-br-3xl"
          />
        </div>
      </div>
    </div>
  );
}
