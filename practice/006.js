function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

class UserService {
  ensureUserData() {
    if (!this.result) {
      this.result = this.fetchData();
    }
    return this.result;
  }

  fetchData() {
    return fetch("https://randomuser.me/api/").then((res) => res.json());
  }
}

const userService = new UserService();

function showUser() {
  userService.ensureUserData().then((response) => {
    const { email, picture } = response.results[0];
    document.write(`<p><img src="${picture.thumbnail}" /> ${email}</p>`);
  });
}
