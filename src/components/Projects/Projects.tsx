import CardColAudio from "./Small/CardColAudio";
import CardCube from "./Small/CardCube";
import { motion } from "framer-motion";

export default function Projects() {
  const childDuration = 0.3;
  const variants = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
  };
  return (
    <div className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-text-base">
          Projects
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-secondary-text-base sm:text-5xl">
          Things I’ve Created
        </p>

        {/* Grid Container */}
        <motion.div
          initial="initial"
          whileInView="whileInView"
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true }}
          className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2 relative "
        >
          <motion.div
            layout
            transition={{ duration: childDuration }}
            variants={variants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <CardColAudio
              title="Book to AudioBook Project"
              description="The Book to AudioBook Project is a web application that converts PDF text into narrated audiobooks, using Google Document AI for text extraction and Coqui TTS for custom AI voice generation."
              audioUrl="/audio/Callum-Long-Callum-V1-51.mp3"
              className="lg:col-span-2 h-full"
              lgTitle="Book to AudioBook Project"
              lgDescription="The Book to AudioBook Project automates the conversion of PDFs into audiobooks. It uses Google Document AI to extract and format text, adding harakat for accurate pronunciation. The text is then transformed into speech with a custom-trained AI voice via Coqui TTS, ensuring a clear and natural listening experience."
              lgImageUrl={[
                "https://i.imgur.com/1FiXSEo.png",
                "https://i.imgur.com/tF5pwfP.png",
                "https://i.imgur.com/9yQv3ny.png",
              ]}
              lgImageAlt="WebUi images"
              LearnMore="https://github.com/AliAlWahayb/WebUi-Arabic-PDF-OCR-Text-Extraction.git"
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
              title="Portfolio-Website V1"
              description="The initial version of my portfolio website, built with vanilla HTML, CSS, and JavaScript, was developed as part of my Web-Based Systems class."
              imageUrl="assets/logo.svg"
              imageAlt="Portfolio-Website V1"
              className="lg:col-span-1"
              css="md:rounded-xl md:rounded-tr-4xl"
              lgTitle="Portfolio-Website V1"
              lgDescription="The initial version of my portfolio website was built using vanilla HTML, CSS, and JavaScript as part of my Web-Based Systems class. The website showcases my skills and projects, providing a clean and simple layout while focusing on responsive design and user experience. It marks the beginning of my journey in web development and serves as a foundation for future projects."
              lgImageUrl="https://i.imgur.com/z3lNVi8.png"
              lgImageAlt="Portfolio-Website V1"
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
              title="Heat Stroke Alert"
              description="designed to monitor real-time weather conditions, providing alerts when the temperature reaches dangerous levels that could lead to heatstroke."
              imageUrl="https://i.imgur.com/Mpwp6Gb.png"
              className="lg:col-span-1"
              css="rounded-t-4xl md:rounded-xl md:rounded-tl-4xl"
              lgTitle="Heat Stroke Alert"
              lgDescription="The HeatStroke Alert app is designed to monitor real-time weather conditions, providing alerts when the temperature reaches dangerous levels that could lead to heatstroke. This application aims to help users stay safe by notifying them of extreme heat conditions in their location, enabling proactive steps to avoid heat-related illnesses. The app is developed as part of the mobile development course at IAU CCIT, Semester 8."
              lgImageUrl={[
                "https://i.imgur.com/eIurPJK.png",
                "https://i.imgur.com/G2JWH85.png",
                "https://i.imgur.com/A1aUj5w.png",
              ]}
              lgImageAlt="Heat Stroke Alert photo"
              LearnMore="https://github.com/AliAlWahayb/HeatStrokeAlertApp3.git"
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
              title="FastAutoClicker"
              description="FastAutoClicker is an open-source auto clicker tool that allows users to automate clicking actions on their computer."
              imageUrl="https://i.imgur.com/eBUpv4l.png"
              imageAlt="FastAutoClicker"
              className="lg:col-span-1"
              css=""
              lgTitle="FastAutoClicker"
              lgDescription="FastAutoClicker is an open-source auto clicker tool that allows users to automate clicking actions on their computer."
              lgImageUrl="https://i.imgur.com/usaytBf.png"
              lgImageAlt="FastAutoClicker"
              LearnMore="https://github.com/AliAlWahayb/FastAutoClicker.git"
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
              title="Telegram Bot for Automating Product Posts"
              description="The Telegram bot I developed automates product posts on platforms like Salla and Instagram using the n8n platform, marking my first freelance job."
              imageUrl="https://www.svgrepo.com/show/452115/telegram.svg"
              imageAlt="Product Posts"
              className="lg:col-span-1"
              css="rounded-b-4xl md:rounded-xl md:rounded-br-4xl"
              lgTitle="Telegram Bot for Automating Product Posts"
              lgDescription="The Telegram bot I created uses the n8n platform to automate product posts on platforms such as Salla and Instagram, marking my first freelance job. This tool helps streamline operations and save time."
              lgImageUrl="https://i.imgur.com/cuYuQsH.png"
              lgImageAlt="Demo"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
