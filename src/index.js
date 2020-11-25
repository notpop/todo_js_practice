import "./styles.css";

const onClickAdd = () => {
  const input_text = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(input_text);
};

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

const deleteFromCompleteList = (target) => {
  document.getElementById("complete-list").removeChild(target);
};

const createIncompleteList = (target_text) => {
  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerText = target_text;

  const complete_button = document.createElement("button");
  complete_button.innerText = "完了";
  complete_button.addEventListener("click", () => {
    const complete_target = complete_button.parentNode;

    deleteFromIncompleteList(complete_target);

    const complete_target_text = complete_target.firstElementChild.innerText;
    complete_target.textContent = null;

    const li = document.createElement("li");
    li.innerText = complete_target_text;

    const back_button = document.createElement("button");
    back_button.innerText = "戻す";
    back_button.addEventListener("click", () => {
      const back_target = back_button.parentNode;
      deleteFromCompleteList(back_target);

      const back_target_text = back_target.firstElementChild.innerText;
      createIncompleteList(back_target_text);
    });

    const delete_button = document.createElement("button");
    delete_button.innerText = "削除";
    delete_button.addEventListener("click", () => {
      const delete_target = delete_button.parentNode;
      deleteFromCompleteList(delete_target);
    });

    complete_target.appendChild(li);
    complete_target.appendChild(back_button);
    complete_target.appendChild(delete_button);
    document.getElementById("complete-list").appendChild(complete_target);
  });

  const delete_button = document.createElement("button");
  delete_button.innerText = "削除";
  delete_button.addEventListener("click", () => {
    const delete_target = delete_button.parentNode;
    deleteFromIncompleteList(delete_target);
  });

  div.appendChild(li);
  div.appendChild(complete_button);
  div.appendChild(delete_button);

  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
