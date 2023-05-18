import disabledFatherIcon from "../assets/icons/disabled_father.svg";
import orphanIcon from "../assets/icons/orphan.svg";
import singleMotherIcon from "../assets/icons/single_mother.svg";

const information = [
  {
    id: 1,
    heading: "Disabled Father",
    description: "Student's father is physically unable to work",
    icon: disabledFatherIcon,
  },
  {
    id: 2,
    heading: "Single Mother",
    description: "Student's father is deceased or has abandoned the family",
    icon: singleMotherIcon,
  },
  {
    id: 3,
    heading: "Orphan",
    description: "Both parents are deceased or have abandoned the child",
    icon: orphanIcon,
  },
];

// eslint-disable-next-line react/prop-types
function Card({ key, src, heading, description }) {
  return (
    <>
      <div key={key} className="flex items-center p-3 shadow-subtle rounded-xl">
        <div>
          <img src={src} className="w-16 h-auto m-4 bg-red-100 " />
        </div>
        <div className="lg:ml-6">
          <h6 className="font-gilroy-bold">{heading}</h6>
          <p className="font-gilroy-medium">{description}</p>
        </div>
      </div>
    </>
  );
}

export default function ScholarshipEligibility() {
  return (
    <>
      <div className="flex flex-col items-center">
        <p className="mb-6 text-3xl font-gilroy-bold">
          Scholarship Eligibility
        </p>
      </div>
      <div className="mx-5 sm:mx-16 md:mx-24 xl:mx-80">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {information.map((item) => (
            <>
              <Card
                key={item.id}
                src={item.icon}
                heading={item.heading}
                description={item.description}
              />
            </>
          ))}
        </div>
      </div>
    </>
  );
}
