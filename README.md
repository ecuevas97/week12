
# 📋 Simple CRD App – Vanilla JavaScript + JSON Server

## 📝 Project Description

This is a simple Create, Read, Delete (CRD) app built using vanilla JavaScript, HTML, and CSS. It allows users to add items to a list, view the full list of items, and delete items one by one.

The app uses a mock backend powered by `json-server` to simulate full CRUD functionality. It's a great beginner-friendly project to practice working with APIs, DOM manipulation, and JavaScript fetch requests.

---

## 🌐 Live Demo

> 🔗 https://youtu.be/2QvEDESyjHk

---

## 🧰 Technologies Used

* HTML
* CSS
* JavaScript (ES6+)
* JSON Server (mock API)

---

## 🌟 Favorite Features

* ✅ **Dynamic DOM Rendering**
  When new items are added or deleted, the app automatically re-renders the item list without needing to refresh the page.

* ✅ **Modular Fetch Functions**
  I used `async/await` with proper error handling to create clean and reusable API calls.

---

## 💻 Code Snippets

Here's an example of how the app fetches and displays all items:

```js
async function fetchItems() {
  try {
    const res = await fetch(API_URL);
    const items = await res.json();
    renderItems(items);
  } catch (err) {
    console.error('Error fetching items:', err);
  }
}
```

And this is how a new item is added:

```js
itemForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = nameInput.value.trim();

  if (!name) return;

  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    });

    if (res.ok) {
      nameInput.value = '';
      fetchItems();
    }
  } catch (err) {
    console.error('Error adding item:', err);
  }
});
```

---

## 📦 Installation & Usage

### 🖥️ To run this project locally:

1. Clone the repo:

   ```
   git clone https://github.com/your-username/crd-vanilla-js.git
   ```
2. Navigate to the folder:

   ```
   cd crd-vanilla-js
   ```
3. Install `json-server` if you haven’t already:

   ```
   npm install -g json-server
   ```
4. Start the backend:

   ```
   json-server --watch db.json
   ```
5. Open `index.html` in your browser using Live Server or by dragging it into a browser tab.

---

## 🤝 Contributing

Pull requests are welcome!
For major changes, please open an issue first to discuss what you'd like to change.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 📬 Contact

* GitHub: [@ecuevas97](https://github.com/ecuevas97)
* Email: [cuevas.elena97@gmail.com]

