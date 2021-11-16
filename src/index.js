function coordToPos(x, y, width) {
    return (y * width + x) * 4;
}

function checkSubImage(image, subImage, startX, startY) {
    for (let x = 0; x < subImage.width; x += 1) {
        for (let y = 0; y < subImage.height; y += 1) {
            const subPos = coordToPos(x, y, subImage.width);

            const subA = subImage.data[subPos + 3];

            if (subA === 0) {
                continue;
            }

            const subR = subImage.data[subPos];
            const subG = subImage.data[subPos + 1];
            const subB = subImage.data[subPos + 2];

            const imagePos = coordToPos(startX + x, startY + y, image.width);

            const imageR = image.data[imagePos];
            const imageG = image.data[imagePos + 1];
            const imageB = image.data[imagePos + 2];

            if (subR !== imageR || subG !== imageG || subB !== imageB) {
                return false;
            }
        }
    }

    return true;
}

function subImageCoords(image, subImage) {
    const matches = [];

    for (let x = 0; x < image.width; x += 1) {
        for (let y = 0; y < image.height; y += 1) {
            if (x + subImage.width >= image.width ||
                y + subImage.height >= image.height) {
                continue;
            }

            if (checkSubImage(image, subImage, x, y)) {
                matches.push({ x, y });
            }
        }
    }

    return matches;
}

module.exports = subImageCoords;
