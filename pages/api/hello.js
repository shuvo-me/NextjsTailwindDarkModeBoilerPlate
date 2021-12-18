// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const jsonData = fetch('https://jsonplaceholder.typicode.com/todos/1');
  // const data = jsonData.json();
  res.status(200).json(jsonData)
}
