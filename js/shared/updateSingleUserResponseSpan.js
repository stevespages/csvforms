export function updateSingleUserResponseSpan(userResponse, colIdx) {
        const spans = document.querySelectorAll(".user-response-span");
        Array.from(spans).forEach(span => {
            if (span.dataset.colIdx === colIdx) {
                span.textContent = " " + userResponse;
            }
        })
}
