/**
 * @param {String} fileUrl - address for the HTML to fetch
 * @param {String} tagId - HTML element from DOM to inject
 * @return {String} the resulting HTML string fragment
 */

async function fetchHtmlAsText(fileUrl) {
  const response = await fetch(fileUrl);
  return await response.text();
}

async function loadHTML(fileUrl, tagId) {
  const contentDiv = document.getElementById(tagId);
  contentDiv.innerHTML = await fetchHtmlAsText(fileUrl);
}

export default loadHTML;
