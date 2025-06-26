import Image from "next/image";

type PersonalInfo = {
  name: string;
  email: string;
  location: string;
  intro: string;
  figurePath: string;
};

type CvItem = {
  title?: string;
  subtitle?: string;
  content?: string;
  period?: string;
};

type CvSection = {
  title: string;
  items: CvItem[];
};

function CvHeader({ personalInfo }: { personalInfo: PersonalInfo }) {
  return (
    <>
      <div className="block md:hidden py-8">
        <div className="flex flex-col space-y-4 justify-center items-center">
          <h1 className="text-4xl font-serif text-claude-orange">{personalInfo.name}</h1>
          <div className="flex flex-col space-y-0">
            <span className="text-xs text-gray-500 dark:text-gray-300">{personalInfo.email}</span>
            <span className="text-xs text-gray-500 dark:text-gray-300">
              {personalInfo.location}
            </span>
          </div>
          <span className="text-xs text-gray-600 dark:text-gray-300">{personalInfo.intro}</span>
        </div>
      </div>

      <div className="hidden md:block py-8">
        <div className="grid grid-cols-6">
          <div className="col-span-6 md:col-span-5 space-y-4 flex flex-col justify-center items-center md:items-start">
            <h1 className="text-5xl font-serif text-claude-orange">{personalInfo.name}</h1>
            <div className="flex flex-col space-y-0">
              <span className="text-xs text-gray-500 dark:text-gray-300">
                {personalInfo.email}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-300">
                {personalInfo.location}
              </span>
            </div>
            <span className="text-xs text-gray-600 dark:text-gray-300">{personalInfo.intro}</span>
          </div>
          <Image
            src={personalInfo.figurePath}
            alt="figure"
            width={2125}
            height={3217}
            className="hidden lg:block w-20 rounded-lg shadow-sm shadow-gray-500/50"
          />
        </div>
      </div>
    </>
  );
}

function CvItemElement({ cvItem }: { cvItem: CvItem }) {
  return (
    <p>
      {cvItem.title ? (
        <span className={"font-bold"}>{cvItem.title}</span>
      ) : null}
      {cvItem.subtitle ? (
        <>
          {cvItem.title ? <br /> : null}
          <span className={"italic text-gray-600 dark:text-gray-300"}>{cvItem.subtitle}</span>
        </>
      ) : null}
      {cvItem.content ? (
        <>
          {cvItem.title || cvItem.subtitle ? <br /> : null}
          <span className={"text-gray-600 dark:text-gray-300"}>{cvItem.content}</span>
        </>
      ) : null}
      {cvItem.period ? (
        <>
          {cvItem.title || cvItem.subtitle || cvItem.content ? <br /> : null}
          <span className={"text-gray-600 dark:text-gray-300 text-sm"}>{cvItem.period}</span>
        </>
      ) : null}
    </p>
  );
}

export default function CvSectionElement() {
  const personalInfo: PersonalInfo = {
    name: "Fangzhan Lin",
    email: "lfz17@tongji.edu.cn",
    location: "Shanghai, China",
    intro: "Doctoral candidate.",
    figurePath: "/personal/kexu_photo.webp",
  };

  const data: CvSection[] = [
    {
      title: "Education",
      items: [
        {
          title: "Tongji University, Shanghai",
          subtitle: "Integrated Master-PhD Degree in Management Science and Engineering",
          content: "",
          period: "September 2022 - Present",
        },
        {
          title: "Tongji University, Chengdu",
          subtitle: "Bachelor's Degree in Information Systems and Information Management",
          content: "",
          period: "September 2018 - June 2022"
        },
      ],
    },
    
    {
      title: "Publications",
      items: [
        {
          title: "",
          subtitle: "",
          content:
            "Zhongyun, Z., Yuming, G., Fangzhan, L, & Youqing, L. (Under revision). How the Technical Features of Generative AI Address Employee Needs: an Affordance and Disaffordance Lens, Journal of Managerial Psychology.",
          period: "",
        },
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col w-full mt-8">
        <CvHeader personalInfo={personalInfo} />

        <div className="flex flex-col space-y-4">
          {data.map((section, index) => (
            <div key={index} className="flex flex-col space-y-4">
              <h2 className="text-2xl font-semibold">{section.title}</h2>
              {section.items.map((item, idx) => (
                <CvItemElement key={idx} cvItem={item} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}