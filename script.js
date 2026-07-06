// Dữ liệu bài viết (giả lập)
const articles = {
  1: { title: "Áo khoác dạ nam mùa đông 2026", category: "Thời trang Nam", img: "https://image.made-in-china.com/155f0j00FOakhKRPEZpc/New-Style-Spring-and-Autumn-Season-Outfits-Men-s-Breathable-Wool-Coat.jpg",
       content: "Áo khoác dạ là item không thể thiếu cho phái mạnh trong mùa đông năm nay, với thiết kế tối giản, dễ phối đồ.", related: [2,3] },
  2: { title: "Cách phối quần jean nam trẻ trung", category: "Thời trang Nam", img: "https://5sfashion.vn/storage/upload/images/ckeditor/CapKKZUuLbAmTpRzTxvMBb2yN0vhAJOtDhLoXy0h.jpg",
       content: "Quần jean kết hợp áo thun trắng và sneaker luôn là công thức an toàn cho phong cách năng động.", related: [1,3] },
  3: { title: "Giày sneaker hot nhất hiện nay", category: "Thời trang Nam", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpILC6PKzfswggEexkPXP9wdznbmwKCg4R3u24ErYeGA&s=10",
       content: "Sneaker màu trắng, đế dày đang là xu hướng được giới trẻ ưa chuộng trong năm 2026.", related: [1,2] },
  4: { title: "Váy dạ hội xu hướng 2026", category: "Thời trang Nữ", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX4hVi9FVYGDyULzfnNIiG7PL7FAq_WSgikCdtkm4Zsw&s=10",
       content: "Váy dạ hội với chất liệu lụa, thiết kế ôm dáng đang làm mưa làm gió trong các sự kiện lớn.", related: [5,6] },
  5: { title: "Áo blazer công sở thanh lịch", category: "Thời trang Nữ", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQnvGCjIUmzTZ2o9WZAZS-OuVPQwIFF1-Z7NJ8ucOlfw&s=10",
       content: "Blazer form rộng phối cùng quần tây giúp phái đẹp tự tin, thanh lịch nơi công sở.", related: [4,6] },
  6: { title: "Set đồ dạo phố cực chất", category: "Thời trang Nữ", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0M3ZMUjDKSRFh2FHT24iQGEeEMuYqVOwatn2adFiqsw&s=10",
       content: "Áo croptop kết hợp chân váy dài là set đồ dạo phố được yêu thích mùa hè này.", related: [4,5] },
  7: { title: "Túi xách hot trend mùa hè", category: "Phụ kiện", img: "https://www.acfc.com.vn/acfc_wp/wp-content/uploads/2024/11/xu-huong-tui-xach-2025-2-1.png",
       content: "Túi xách mini màu pastel đang là phụ kiện được săn đón nhiều nhất mùa hè 2026.", related: [8,9] },
  8: { title: "Đồng hồ thời trang unisex", category: "Phụ kiện", img: "https://cdn.tgdd.vn/Files/2022/08/06/1453544/dong-ho-unisex-la-gi-nhung-doi-tuong-co-the-su-du.jpg",
       content: "Đồng hồ dây da tối giản phù hợp cho cả nam và nữ, dễ phối với mọi trang phục.", related: [7,9] },
  9: { title: "Kính mát phong cách Hàn Quốc", category: "Phụ kiện", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ2UBZJ7z9gMMQNEI_ml0P13gO3QOWH1W2Xl2av2Qb2g&s",
       content: "Kính mát gọng tròn theo phong cách Hàn Quốc giúp tổng thể trang phục thêm phần cá tính.", related: [7,8] },
  10:{ title: "Màu sắc lên ngôi năm 2026", category: "Xu hướng", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlPoszghQNj1L3htMJbvCNReX4thR7_d5XV1SaTtjuAg&s=10",
       content: "Tông màu đất và pastel tiếp tục thống trị các bảng phối màu thời trang năm nay.", related: [11,12] },
  11:{ title: "Chất liệu vải bền vững", category: "Xu hướng", img: "https://mimifashion.vn/wp-content/uploads/2024/06/chat-lieu-vai-ben-vung-4.jpg",
       content: "Vải tái chế và hữu cơ đang được nhiều thương hiệu lớn ưu tiên sử dụng.", related: [10,12] },
  12:{ title: "Phong cách tối giản Minimalism", category: "Xu hướng", img: "https://xhomesg.com.vn/wp-content/uploads/2024/09/tim-hieu-chung-ve-phong-cach-minimalism-4-1024x909.jpg",
       content: "Phong cách tối giản với gam màu trung tính lên ngôi trong mùa mốt 2026.", related: [10,11] }
};

// ----- Trang chi tiết -----
const contentEl = document.getElementById("content");
if (contentEl) {
  const id = new URLSearchParams(location.search).get("id");
  const art = articles[id];

  if (art) {
    contentEl.innerHTML = `<img src="${art.img}" alt="${art.title}" class="detail-img"><h2>${art.title}</h2><p><em>${art.category}</em></p><p>${art.content}</p>`;

    const relatedList = document.getElementById("relatedList");
    art.related.forEach(rid => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="index3.html?id=${rid}">${articles[rid].title}</a>`;
      relatedList.appendChild(li);
    });
  } else {
    contentEl.innerHTML = "<p>Không tìm thấy bài viết.</p>";
  }

  // Bình luận (lưu tạm bằng localStorage theo id bài viết)
  const commentForm = document.getElementById("commentForm");
  const commentList = document.getElementById("commentList");
  const storageKey = "comments_" + id;

  function loadComments() {
    const data = JSON.parse(localStorage.getItem(storageKey) || "[]");
    commentList.innerHTML = "";
    data.forEach(c => {
      const li = document.createElement("li");
      li.textContent = `${c.name}: ${c.text}`;
      commentList.appendChild(li);
    });
  }

  commentForm.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("commentName").value.trim();
    const text = document.getElementById("commentText").value.trim();
    if (!name || !text) return;

    const data = JSON.parse(localStorage.getItem(storageKey) || "[]");
    data.push({ name, text });
    localStorage.setItem(storageKey, JSON.stringify(data));
    commentForm.reset();
    loadComments();
  });

  loadComments();
}

// ----- Trang đăng nhập -----
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", e => {
    e.preventDefault();
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();
    const msg = document.getElementById("loginMsg");

    if (user && pass) {
      msg.style.color = "green";
      msg.textContent = "Đăng nhập thành công! Chào mừng " + user + ".";
    } else {
      msg.style.color = "red";
      msg.textContent = "Vui lòng nhập đầy đủ thông tin.";
    }
  });
}