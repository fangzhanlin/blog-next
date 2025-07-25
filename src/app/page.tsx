import CvSectionElement from "@/components/CV";
import { redirect } from 'next/navigation';

export default function Page() {

  return (
    // Add the width constraint wrapper div here
    <div className="w-5/6 md:w-2/3 lg:w-1/2 mx-auto">
      <div className="flex flex-col justify-center items-center">
        <CvSectionElement />
      </div>
    </div>
  );
}
