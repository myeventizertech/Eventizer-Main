const debounce = (time) => new Promise((acc) => setTimeout(acc, time));

export default debounce;
