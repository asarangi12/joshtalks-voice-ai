import { motion } from "framer-motion";
import { DiversityEngine } from "./DiversityEngine";

export function Mission() {
  return (
    <section id="research" className="border-b hairline" style={{ background: "linear-gradient(180deg, #ffffff 0%, #F8F9FA 18%, #F8F9FA 100%)" }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 lg:py-36">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground mb-10 uppercase"
        >
          [ 02 ] — Our Mission
        </motion.div>

        <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 lg:col-span-6"
          >
            <h2 className="font-display font-medium text-[clamp(2rem,5.2vw,4.75rem)] leading-[1.02] tracking-[-0.03em] text-balance">
              We build the voice <br />
              <span className="italic text-brand">infrastructure</span> AI needs.
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 text-lg lg:text-xl text-foreground/80 leading-[1.7] max-w-xl"
            >
              Josh Talks enables AI labs and enterprise teams to train, evaluate,
              and scale voice technologies that truly understand India's
              linguistic diversity.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-base text-muted-foreground leading-[1.8] max-w-xl"
            >
              We collect, curate, and deliver research-grade conversational and
              multi-speaker voice datasets across Indian languages, accents, and
              real contexts — with rigorous quality, compliance, and traceability.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 lg:col-span-6 lg:pt-4"
          >
            <DiversityEngine />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
