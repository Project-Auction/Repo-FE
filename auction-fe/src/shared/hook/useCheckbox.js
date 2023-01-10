import { useState } from "react";

const useCheckbox = ({ data = [], keyCompare }) => {
  /* Set state checked for Checkbox */
  const [checkedAllState, setCheckedAllState] = useState(false);

  const [itemsSelected, setItemsSelected] = useState(
    data.map((item) => ({ ...item, checked: false }))
  );

  const handleCheckedAll = (e) => {
    const isChecked = e.target.checked;
    setItemsSelected(
      itemsSelected.map((items) => ({ ...items, checked: isChecked }))
    );
    setCheckedAllState(isChecked);
  };

  const handleCheckedItem = (val, e) => {
    /* Handle unchecked */
    const isChecked = e.target.checked;
    setItemsSelected(
      itemsSelected.map((item) =>
        item[keyCompare] === val[keyCompare]
          ? { ...item, checked: isChecked }
          : item
      )
    );
  };

  return {
    handleCheckedAll,
    handleCheckedItem,
    itemsSelected,
    setItemsSelected,
    checkedAllState,
    setCheckedAllState,
  };
};

export default useCheckbox;
