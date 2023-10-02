import _ from "lodash";

export const getPaginationRange = (totalPage, limit, currentPage, siblings) => {
	let totalPageNumToShow = 7 + siblings;
	if (totalPage <= totalPageNumToShow) {
		return _.range(1, totalPage + 1);
	}
	let leftSiblingIndex = Math.max(currentPage - siblings, 1);
	let rightSiblingIndex = Math.min(currentPage + siblings, totalPage);

	let showLeftDots = leftSiblingIndex > 2;

	let showRightDots = rightSiblingIndex < totalPage - 2;

	if (!showLeftDots && showRightDots) {
		let leftItemsCount = 3 + 2 * siblings;
		return [..._.range(1, leftItemsCount + 1), "...", totalPage];
	} else if (showLeftDots && !showRightDots) {
		let RightItemCount = 3 + 2 * siblings;
		return [
			"1",
			"...",
			..._.range(totalPage - RightItemCount + 1, totalPage + 1),
		];
	} else {
		return [
			"1",
			"...",
			..._.range(leftSiblingIndex, rightSiblingIndex + 1),
			"...",
			totalPage,
		];
	}
};
