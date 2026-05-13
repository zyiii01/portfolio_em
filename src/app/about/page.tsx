import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "About Zion Joy B. Barlongo, a UI/UX Designer and IT student focused on technology, design, and professional growth.",
};

const DETAILS = [
  { label: "Age", value: "22 Years", accent: "01" },
  {
    label: "Program",
    value: "Bachelor of Science in Information Technology",
    accent: "02",
  },
  { label: "Location", value: "Laoac, Pangasinan", accent: "03" },
  { label: "Email", value: "zjoybarlongo040504@gmail.com", accent: "04" },
];

export default function AboutPage() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden px-6 pb-16 pt-28 md:px-10">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 20% 22%, rgba(97,16,94,0.85), transparent 34%), radial-gradient(circle at 82% 72%, rgba(200,71,113,0.24), transparent 30%), #280B45",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-24 -z-10 h-px w-[min(980px,80vw)] -translate-x-1/2"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,233,138,0.55), transparent)",
        }}
      />

      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-9 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12">
        <div className="flex justify-center lg:justify-start">
          <div
            className="relative h-[390px] w-full max-w-[280px] overflow-hidden border bg-white/5 shadow-2xl sm:h-[450px] sm:max-w-[310px]"
            style={{
              borderColor: "#FFE98A",
              borderRadius: "999px 999px 42px 42px",
              boxShadow:
                "0 0 0 1px rgba(255,233,138,0.28), 0 0 36px rgba(255,233,138,0.32), 0 28px 80px rgba(0,0,0,0.36)",
            }}
          >
            <Image
              src="/images/zion-joy-barlongo.png"
              alt="Professional portrait of Zion Joy B. Barlongo"
              fill
              priority
              sizes="(min-width: 1024px) 310px, 90vw"
              className="object-cover object-[50%_18%]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 55%, rgba(40,11,69,0.28))",
              }}
            />
          </div>
        </div>

        <div className="flex flex-col">
          <div className="mb-4 flex items-center gap-3">
            <span
              className="h-2 w-2 rounded-full"
              style={{
                background: "#FFE98A",
                boxShadow: "0 0 18px rgba(255,233,138,0.75)",
              }}
            />
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#FFE98A]/80">
              About Me
            </p>
          </div>

          <h4 className="font-display text-2xl font-bold leading-[1.05] text-white md:text-5xl lg:text-6xl">
            UI/UX{" "}
            <span className="text-[#C84771] drop-shadow-[0_0_22px_rgba(200,71,113,0.38)]">
              Designer
            </span>
          </h4>

          <div className="mt-6 max-w-xl space-y-4 text-sm leading-7 text-white/72 md:text-base">
            <p>
              Hello! I am an IT student who is passionate about learning and
              improving my skills in technology and design. During our
              internship journey, I gained experience working with real tasks,
              communicating with people, and understanding how technology is
              used in actual work environments.
            </p>
            <p>
              My internship helped me become more responsible, patient, and
              adaptable. It also improved my problem-solving, teamwork, and
              communication skills. I am always willing to learn new things and
              continue growing as a future IT professional.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {DETAILS.map((detail) => (
              <article
                key={detail.label}
                className="about-info-card group rounded-lg border px-3.5 py-3 transition duration-300"
              >
                <div className="mb-2.5 flex items-center justify-between gap-3">
                  <p className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-white/48">
                    {detail.label}
                  </p>
                  <span className="font-display text-[0.68rem] text-[#FFE98A]/70">
                    {detail.accent}
                  </span>
                </div>
                <p className="text-xs font-semibold leading-snug text-white group-hover:text-[#FFE98A] md:text-[0.82rem]">
                  {detail.value}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
