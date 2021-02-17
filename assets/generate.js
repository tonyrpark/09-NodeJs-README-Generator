function generateInfo(data, gitHubData) {
  return `
    # **${data.title}**

    ${data.badge}

    `;
}

module.exports = generateInfo;
