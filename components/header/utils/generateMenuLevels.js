const generateMenuLevels = (slices) => {
  let firstLevel = [];
  let secondLevel = {};
  slices.forEach((slice, index) => {
    if (slice.slice_type === 'first_level_nav_slice') {
      firstLevel.push(slice.primary);
    }

    if (slice.slice_type === 'second_level_nav_slice') {
      const firstLevelIndex = firstLevel.length - 1;

      if (secondLevel[firstLevelIndex]) {
        secondLevel[firstLevelIndex].push({
          primary: slice.primary,
          items: slice.items,
        });
      } else {
        secondLevel[firstLevelIndex] = [];
        secondLevel[firstLevelIndex].push({
          primary: slice.primary,
          items: slice.items,
        });
      }
    }
  });

  return { firstLevel, secondLevel };
};

export default generateMenuLevels;
