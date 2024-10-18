export const handleSelectChange = (
  e: React.ChangeEvent<HTMLSelectElement>,
  setSelectedSponsor: React.Dispatch<React.SetStateAction<string>>
) => {
  const selectedValue = e.target.value;
  setSelectedSponsor(selectedValue);
};
