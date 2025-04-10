import { useState } from "react";
import { useRouter } from "expo-router";

const menuOptions = {
  enrollment: [
    "Course Registration",
    "Adding or Dropping Subjects",
    "Class Schedule Adjustments",
  ],
  financial: [
    "Tuition payment and billing inquiries",
    "Scholarship and financial aid processing",
    "Clearing balances for graduation",
  ],
  graduation:[
    "Application for graduation",
    "Receiving diplomas and certificates",
  ],
  records:[
    "Requesting Transcript",
    "Accessing Grades and Academic History",
    "Certification of Enrollment",
  ],
  profile:[
    "Updating Personal Details",
    "Requesting ID Cards",
  ],
  continuing_student: [
   "Continuing Student",
   "New Student"
  ]
};

export function useModalHandler(identifier: keyof typeof menuOptions) {
  const router = useRouter();
  const [selectedText, setSelectedText] = useState<string | null>(null);

  const openModal = (text: string) => setSelectedText(text);
  const closeModal = () => setSelectedText(null);
  const proceed = () => {
    closeModal();
    router.replace("/continuing");
  };

  return { menuOptions: menuOptions[identifier], selectedText, openModal, closeModal, proceed };
}
