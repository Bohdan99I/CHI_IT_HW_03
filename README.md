# CHI_IT_HW_03

## Об'єктно-орієнтоване програмування та робота з DOM

### Завдання:

1. **Шаблони проєктування:**
   Реалізувати простий шаблон проєктування "Фабрика" (Factory), який створює об'єкти різних типів (наприклад, `Car` і `Bike`). Ці об'єкти повинні мати методи `ride()` та `stop()`. Базовий клас повинен називатися `Transport`.

**2. Робота з DOM:**
Написати додаток, який відображає список персонажів з **Rick & Morty API** та реалізує просту пагінацію.

**Опис функціоналу:**

- Список персонажів отримуємо за допомогою `fetch` за адресою:
  https://rickandmortyapi.com/api/character
- Пагінація реалізується двома кнопками: `Next` і `Prev`.
- Якщо ми дійшли до першої або останньої сторінки, відповідна кнопка блокується:
  ```javascript
  addMessageButton.disabled = true; // Заблокувати кнопку
  ```
- Посередині відображається номер поточної сторінки, який обчислюється зі значення поля `data.info.next`. Якщо це поле дорівнює `undefined`, відображаємо `data.info.pages` (останню сторінку).

**Посилання на документацію API**:  
[Rick and Morty API Documentation](https://rickandmortyapi.com/documentation/#get-all-characters)

**Верстка вітається**. Під час завантаження відображаємо першу сторінку. Поки чекаємо на завантаження, на екрані має бути напис "Loading…".
