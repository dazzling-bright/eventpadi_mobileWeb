export interface Sponsor {
  name: string;
  image: string;
  website: string;
}

export const handleSelectChange = (
  e: React.ChangeEvent<HTMLSelectElement>,
  setSelectedSponsor: React.Dispatch<React.SetStateAction<string>>
) => {
  const selectedValue = e.target.value;
  setSelectedSponsor(selectedValue);
};

export const handleSponsorClick = (
  sponsor: Sponsor, 
  setCurrentSponsor: React.Dispatch<React.SetStateAction<Sponsor | null>>, 
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setCurrentSponsor(sponsor);
  setShowModal(true);
};

export const handleCloseModal = (
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
  setCurrentSponsor: React.Dispatch<React.SetStateAction<Sponsor | null>> 
) => {
  setShowModal(false);
  setCurrentSponsor(null);
};
