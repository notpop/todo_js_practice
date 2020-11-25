import "./styles.css";

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

const deleteFromCompleteList = (target) => {
  document.getElementById("complete-list").removeChild(target);
};

const createBackButton = () => {
  const back_button = document.createElement("button");
  back_button.innerText = "戻す";
  back_button.addEventListener("click", () => {
    const back_target = back_button.parentNode;
    deleteFromCompleteList(back_target);

    const back_target_text = back_target.firstElementChild.innerText;
    createIncompleteList(back_target_text);
  });

  return back_button;
};

const createIncompleteDeleteButton = () => {
  const delete_button = document.createElement("button");
  delete_button.innerText = "削除";
  delete_button.addEventListener("click", () => {
    const delete_target = delete_button.parentNode;
    deleteFromIncompleteList(delete_target);
  });

  return delete_button;
};

const createCompleteDeleteButton = () => {
  const delete_button = document.createElement("button");
  delete_button.innerText = "削除";
  delete_button.addEventListener("click", () => {
    const delete_target = delete_button.parentNode;
    deleteFromCompleteList(delete_target);
  });

  return delete_button;
};

const createCompleteButton = () => {
  const complete_button = document.createElement("button");
  complete_button.innerText = "完了";
  complete_button.addEventListener("click", () => {
    const complete_target = complete_button.parentNode;

    deleteFromIncompleteList(complete_target);

    const complete_target_text = complete_target.firstElementChild.innerText;
    complete_target.textContent = null;

    const li = document.createElement("li");
    li.innerText = complete_target_text;

    const back_button = createBackButton();
    const delete_button = createCompleteDeleteButton();

    complete_target.appendChild(li);
    complete_target.appendChild(back_button);
    complete_target.appendChild(delete_button);
    document.getElementById("complete-list").appendChild(complete_target);
  });

  return complete_button;
};

const createIncompleteList = (target_text) => {
  const div = document.createElement("div");
  div.className = "list-row";
  const li = document.createElement("li");
  li.innerText = target_text;
  const complete_button = createCompleteButton();
  const delete_button = createIncompleteDeleteButton();

  div.appendChild(li);
  div.appendChild(complete_button);
  div.appendChild(delete_button);

  document.getElementById("incomplete-list").appendChild(div);
};

const onClickAdd = () => {
  const input_text = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(input_text);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
