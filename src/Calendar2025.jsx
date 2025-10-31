import React, { useState, useMemo } from "react";
import "./Calendar.css"; 

// 1. IMPORT CÁC TỆP ẢNH CỤC BỘ DÙNG TRONG EVENTS
// Vui lòng bổ sung thêm các import khác nếu các ảnh sau nằm ở thư mục assets/thangX/
// Dùng đường dẫn tương đối từ tệp Calendar2025.jsx đến assets/thangX/
import thang1Image from "./assets/thang1/Thang1.1.jpg"; 
import thang1_2Image from "./assets/thang1/Thang1.2.jpg"; 
import thang1_3Image from "./assets/thang1/Thang1.3.jpg"; 
import thang1_4Image from "./assets/thang1/Thang1.4.jpg"; 
import thang1_5Image from "./assets/thang1/Thang1.5.jpg"; 
import thang1_6Image from "./assets/thang1/Thang1.6.jpg"; 
import thang1_7Image from "./assets/thang1/Thang1.7.jpg"; 
//Image thang 2
import thang2_1Image from "./assets/thang2/Thang2.1.jpg"; 
import thang2_2Image from "./assets/thang2/Thang2.2.jpg"; 
import thang2_3Image from "./assets/thang2/Thang2.3.jpg"; 
import thang2_4Image from "./assets/thang2/Thang2.4.jpg"; 
import thang2_5Image from "./assets/thang2/Thang2.5.jpg"; 
//thang3
import thang3_1Image from "./assets/thang3/Thang3.1.jpg"; 
import thang3_2Image from "./assets/thang3/Thang3.2.jpg"; 
import thang3_3Image from "./assets/thang3/Thang3.3.jpg"; 
import thang3_4Image from "./assets/thang3/Thang3.4.jpg"; 
import thang3_5Image from "./assets/thang3/Thang3.5.jpg"; 
import thang3_6Image from "./assets/thang3/Thang3.5.jpg"; 

//thang4
import thang4_1Image from "./assets/thang4/Thang4.1.jpg"; 
import thang4_2Image from "./assets/thang4/Thang4.2.jpg"; 
import thang4_3Image from "./assets/thang4/Thang4.3.jpg"; 
import thang4_4Image from "./assets/thang4/Thang4.4.jpg"; 
import thang4_5Image from "./assets/thang4/Thang4.5.jpg"; 
//thang5
import thang5_1Image from "./assets/thang5/Thang5.1.jpg"; 
import thang5_2Image from "./assets/thang5/Thang5.2.jpg"; 
import thang5_3Image from "./assets/thang5/Thang5.3.jpg"; 
import thang5_4Image from "./assets/thang5/Thang5.4.jpg"; 
import thang5_5Image from "./assets/thang5/Thang5.5.jpg"; 
//thang6
import thang6_1Image from "./assets/thang6/Thang6.1.jpg"; 
import thang6_2Image from "./assets/thang6/Thang6.2.jpg"; 
import thang6_3Image from "./assets/thang6/Thang6.3.jpg"; 
import thang6_4Image from "./assets/thang6/Thang6.4.jpg"; 
import thang6_5Image from "./assets/thang6/Thang6.5.jpg"; 
import thang6_6Image from "./assets/thang6/Thang6.6.jpg"; 
//thang7
import thang7_1Image from "./assets/thang7/Thang7.1.jpg"; 
import thang7_2Image from "./assets/thang7/Thang7.2.jpg"; 
import thang7_3Image from "./assets/thang7/Thang7.3.jpg"; 
import thang7_4Image from "./assets/thang7/Thang7.4.jpg"; 
import thang7_5Image from "./assets/thang7/Thang7.5.jpg"; 
//thang8
import thang8_1Image from "./assets/thang8/Thang8.1.jpg"; 
import thang8_2Image from "./assets/thang8/Thang8.2.jpg"; 
import thang8_3Image from "./assets/thang8/Thang8.3.jpg"; 
import thang8_4Image from "./assets/thang8/Thang8.4.jpg"; 
import thang8_5Image from "./assets/thang8/Thang8.5.jpg"; 
//thang9
import thang9_1Image from "./assets/thang9/Thang9.1.jpg"; 
import thang9_2Image from "./assets/thang9/Thang9.2.jpg"; 
import thang9_3Image from "./assets/thang9/Thang9.3.jpg"; 
import thang9_4Image from "./assets/thang9/Thang9.4.jpg"; 
import thang9_5Image from "./assets/thang9/Thang9.5.jpg"; 
import thang9_6Image from "./assets/thang9/Thang9.6.jpg"; 
//thang10
import thang10_1Image from "./assets/thang10/Thang10.1.jpg"; 
import thang10_2Image from "./assets/thang10/Thang10.2.jpg"; 
import thang10_3Image from "./assets/thang10/Thang10.3.jpg"; 
import thang10_4Image from "./assets/thang10/Thang10.4.jpg"; 
import thang10_5Image from "./assets/thang10/Thang10.5.jpg"; 
import thang10_6Image from "./assets/thang10/Thang10.6.jpg"; 
import thang10_7Image from "./assets/thang10/Thang10.7.jpg"; 
//thang11
import thang11_1Image from "./assets/thang11/Thang11.1.jpg"; 
import thang11_2Image from "./assets/thang11/Thang11.2.jpg"; 
import thang11_3Image from "./assets/thang11/Thang11.3.jpg"; 
import thang11_4Image from "./assets/thang11/Thang11.4.jpg"; 
import thang11_5Image from "./assets/thang11/Thang11.5.jpg"; 
//thang12
import thang12_1Image from "./assets/thang12/Thang12.1.jpg"; 
import thang12_2Image from "./assets/thang12/Thang12.2.jpg"; 
import thang12_3Image from "./assets/thang12/Thang12.3.jpg"; 
import thang12_4Image from "./assets/thang12/Thang12.4.jpg"; 
import thang12_5Image from "./assets/thang12/Thang12.5.jpg"; 
import thang12_6Image from "./assets/thang12/Thang12.6.jpg"; 
// Nếu bạn có ảnh khác trong assets, hãy import ở đây:
// Nếu bạn có ảnh khác trong assets, hãy import ở đây:


// import hinhAnhKhac from "./assets/duong_dan_den_anh.jpg"; 


const YEAR = 2025; 

// Dữ liệu sự kiện MẪU cho cả năm 2025
const EVENTS = {
    // --- THÁNG 1 (Index 0) ---
    "2025-01-01": [
        // SỬ DỤNG BIẾN ĐÃ IMPORT (thang1Image) thay vì chuỗi đường dẫn
        { title: "Tết Dương lịch", year: 2025, summary: "Nghỉ lễ đầu năm mới, Ngày đầu tiên của năm.", image: thang1Image }, 
        { title: "Ngày Thống nhất Quốc gia (Ý)", year: 1861, summary: "Ngày thành lập Vương quốc Ý (tuy nhiên ngày chính thức là 17/3)." , image: thang1_2Image }
    ],
    "2025-01-09": [
        { title: "Khai trương Trụ sở LHQ", year: 1951, summary: "Trụ sở Liên Hợp Quốc chính thức mở cửa tại New York." , image: thang1_3Image }
    ],
    "2025-01-15": [
        { title: "Ngày Ký kết Hiệp ước Hòa bình", year: 1973, summary: "Ngày ký Hiệp ước Hòa bình tại Việt Nam." , image: thang1_4Image }
    ],
    "2025-01-27": [
        { title: "Ký kết Hiệp định Paris (V2)", year: 1973, summary: "Hiệp định chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam." , image: thang1_5Image},
        { title: "Ngày Quốc tế Tưởng niệm Nạn nhân Holocaust", year: 2005, summary: "Tưởng niệm nạn nhân diệt chủng của Đức Quốc xã.", image: thang1_6Image }
    ],
    "2025-01-29": [
        { title: "Tết Nguyên Đán (Âm lịch)", year: 2025, summary: "Ngày Tết truyền thống quan trọng nhất của Việt Nam (Mùng 1 Tết Âm lịch)." , image: thang1_7Image }
    ],
    // --- THÁNG 2 (Index 1) ---
    "2025-02-02": [
        { title: "Ngày Thế giới Đất ngập nước", year: 1971, summary: "Ngày ký Công ước Ramsar về bảo tồn và sử dụng khôn ngoan các vùng đất ngập nước." ,image: thang2_1Image}
    ],
    "2025-02-03": [
        // URL ảnh được giữ nguyên
        { title: "Thành lập Đảng Cộng sản VN", year: 1930, summary: "Hội nghị hợp nhất các tổ chức Cộng sản tại Hương Cảng, sự kiện quan trọng trong lịch sử Việt Nam.",image: thang2_2Image } 
    ],
    "2025-02-07": [
        { title: "Ngày Thử nghiệm Quốc gia (Ấn Độ)", year: 1999, summary: "Ngày tưởng niệm những người đã hi sinh trong các vụ thử hạt nhân.",image: thang2_3Image }
    ],
    "2025-02-14": [
        { title: "Ngày Tình yêu (Valentine)", year: 2025, summary: "Ngày lễ tình nhân truyền thống.",image: thang2_4Image }
    ],
    "2025-02-22": [
        { title: "Ngày Quốc tế Bảo vệ Thiên thần Hộ mệnh", year: 2025, summary: "Ngày tôn vinh các tổ chức và cá nhân giúp đỡ người khuyết tật, người già.",image: thang2_5Image }
    ],
    // ... Giữ nguyên các sự kiện còn lại trong EVENTS (chỉ sửa image: "./assets/thang1/Thang1.jpg" thành image: thang1Image) ...
    
    "2025-03-08": [
        { title: "Quốc tế Phụ nữ", year: 1909, summary: "Kỷ niệm phong trào đấu tranh đòi quyền bình đẳng của nữ công nhân Mỹ.",image: thang3_1Image }
    ],
    "2025-03-13": [
        { title: "Bắt đầu Chiến dịch Điện Biên Phủ", year: 1954, summary: "Mở màn trận đánh lịch sử tại Điện Biên Phủ." ,image: thang3_2Image}
    ],
    "2025-03-17": [
        { title: "Ngày Thống nhất Quốc gia (Ý) chính thức", year: 1861, summary: "Ngày thành lập Vương quốc Ý (ý nghĩa lịch sử)." ,image: thang3_3Image}
    ],
    "2025-03-22": [
        { title: "Ngày Nước Thế giới", year: 1993, summary: "Ngày nâng cao nhận thức về tầm quan trọng của nước sạch.",image: thang3_4Image }
    ],
    "2025-03-23": [
        { title: "Ngày Khí tượng Thế giới", year: 1950, summary: "Ngày thành lập Tổ chức Khí tượng Thế giới (WMO).",image: thang3_5Image }
    ],
    "2025-03-26": [
        { title: "Thành lập Đoàn TNCS HCM", year: 1931, summary: "Ngày thành lập Đoàn Thanh niên Cộng sản Hồ Chí Minh." ,image: thang3_6Image}
    ],
    // --- THÁNG 4 (Index 3) ---
    "2025-04-02": [
        { title: "Ngày Thế giới Nhận thức về Tự kỷ", year: 2008, summary: "Ngày nâng cao nhận thức về hội chứng tự kỷ." ,image: thang4_1Image}
    ],
    "2025-04-11": [
        { title: "Giỗ Tổ Hùng Vương", year: 2025, summary: "Ngày tưởng nhớ các vị Vua Hùng (Mùng 10 tháng 3 Âm lịch).",image: thang4_2Image } // Giả sử Giỗ Tổ rơi vào ngày này
    ],
    "2025-04-22": [
        { title: "Ngày Trái Đất", year: 1970, summary: "Ngày vận động bảo vệ môi trường toàn cầu." ,image: thang4_3Image}
    ],
    "2025-04-23": [
        { title: "Ngày Sách và Bản quyền Thế giới", year: 1995, summary: "Ngày tôn vinh sách, văn hóa đọc và bản quyền." ,image: thang4_4Image}
    ],
    "2025-04-30": [
        { title: "Giải phóng Miền Nam, Thống nhất Đất nước", year: 1975, summary: "Kết thúc cuộc Chiến tranh Việt Nam.",image: thang4_5Image }
    ],
    // --- THÁNG 5 (Index 4) ---
    "2025-05-01": [
        { title: "Ngày Quốc tế Lao động", year: 2025, summary: "Nghỉ lễ quốc tế tôn vinh người lao động, kỷ niệm cuộc biểu tình Haymarket năm 1886.",image: thang5_1Image }
    ],
    "2025-05-03": [
        { title: "Ngày Quốc tế Tự do Báo chí", year: 1993, summary: "Ngày nâng cao nhận thức về tầm quan trọng của tự do báo chí.",image: thang5_2Image }
    ],
    "2025-05-07": [
        { title: "Chiến thắng Điện Biên Phủ", year: 1954, summary: "Kết thúc thắng lợi chiến dịch lịch sử, buộc Pháp ký Hiệp định Genève.",image: thang5_3Image }
    ],
    "2025-05-18": [
        { title: "Ngày Palach Lãnh đạo (Ấn Độ)", year: 2025, summary: "Ngày tưởng niệm vị lãnh đạo và những người chiến đấu cho Ấn Độ.",image: thang5_4Image }
    ],
    "2025-05-19": [
        { title: "Sinh nhật Chủ tịch Hồ Chí Minh", year: 1890, summary: "Kỷ niệm ngày sinh của vị lãnh tụ dân tộc Việt Nam.",image: thang5_5Image }
    ],
    // --- THÁNG 6 (Index 5) ---
    "2025-06-01": [
        { title: "Ngày Quốc tế Thiếu nhi", year: 1950, summary: "Ngày hội của trẻ em trên toàn thế giới, biểu thị sự đoàn kết vì trẻ thơ.",image: thang6_1Image }
    ],
    "2025-06-05": [
        { title: "Bác Hồ ra đi tìm đường cứu nước", year: 1911, summary: "Người thanh niên Nguyễn Tất Thành rời cảng Sài Gòn.",image: thang6_2Image },
        { title: "Ngày Môi trường Thế giới", year: 1972, summary: "Ngày nâng cao nhận thức về môi trường và khuyến khích hành động bảo vệ.",image: thang6_3Image }
    ],
    "2025-06-08": [
        { title: "Ngày Đại dương Thế giới", year: 2008, summary: "Ngày tôn vinh các đại dương trên thế giới và nâng cao nhận thức bảo vệ." ,image: thang6_4Image}
    ],
    "2025-06-21": [
        { title: "Ngày Báo chí Cách mạng Việt Nam", year: 1925, summary: "Kỷ niệm ngày ra đời báo Thanh Niên do Nguyễn Ái Quốc sáng lập.",image: thang6_5Image }
    ],
    "2025-06-28": [
        { title: "Bắt đầu Trận Thành cổ Quảng Trị", year: 1972, summary: "Trận chiến ác liệt kéo dài 81 ngày đêm tại Quảng Trị." ,image: thang6_6Image}
    ],
    // --- THÁNG 7 (Index 6) ---
    "2025-07-02": [
        { title: "Quốc hội khóa VI thông qua tên nước CHXHCN Việt Nam", year: 1976, summary: "Đổi tên nước chính thức sau khi thống nhất đất nước.",image: thang7_1Image }
    ],
    "2025-07-05": [
        { title: "Ngày Quốc tế Hợp tác Xã", year: 1995, summary: "Thứ Bảy đầu tiên của tháng 7, kỷ niệm phong trào hợp tác xã toàn cầu." ,image: thang7_2Image}
    ],
    "2025-07-11": [
        { title: "Ngày Dân số Thế giới", year: 1989, summary: "Ngày nâng cao nhận thức về các vấn đề dân số toàn cầu." ,image: thang7_3Image}
    ],
    "2025-07-14": [
        { title: "Ngày Quốc khánh Pháp (Bastille Day)", year: 1789, summary: "Kỷ niệm sự kiện phá ngục Bastille, biểu tượng cho Cách mạng Pháp.",image: thang7_4Image }
    ],
    "2025-07-27": [
        { title: "Ngày Thương binh - Liệt sĩ", year: 1947, summary: "Ngày tri ân những người đã hy sinh vì độc lập, tự do của Tổ quốc.",image: thang7_5Image }
    ],
    // --- THÁNG 8 (Index 7) ---
    "2025-08-12": [
        { title: "Ngày Quốc tế Thanh niên", year: 2000, summary: "Ngày tôn vinh và nâng cao vai trò của thanh niên trên toàn thế giới.",image: thang8_1Image }
    ],
    "2025-08-19": [
        { title: "Cách mạng Tháng Tám thành công", year: 1945, summary: "Khởi nghĩa giành chính quyền trên toàn quốc, thành lập nước Việt Nam Dân chủ Cộng hòa.",image: thang8_2Image }
    ],
    "2025-08-20": [
        { title: "Thành lập Đài Tiếng nói Việt Nam", year: 1945, summary: "Chủ tịch Hồ Chí Minh ký quyết định thành lập Đài." ,image: thang8_3Image}
    ],
    "2025-08-28": [
        { title: "Thành lập Bộ Công an", year: 1945, summary: "Ngày truyền thống của lực lượng Công an Nhân dân." ,image: thang8_4Image}
    ],
    "2025-08-30": [
        { title: "Ngày Tưởng niệm Nạn nhân Chiến tranh Hóa học", year: 2005, summary: "Ngày tưởng niệm các nạn nhân chiến tranh hóa học." ,image: thang8_5Image}
    ],
    // --- THÁNG 9 (Index 8) ---
    "2025-09-02": [
        { title: "Quốc khánh Việt Nam", year: 1945, summary: "Chủ tịch Hồ Chí Minh đọc Tuyên ngôn độc lập tại Quảng trường Ba Đình, khai sinh nước Việt Nam Dân chủ Cộng hòa.",image: thang9_1Image }
    ],
    "2025-09-07": [
        { title: "Ngày Thành lập Đài Tiếng Nói Việt Nam", year: 1945, summary: "Kỷ niệm sự ra đời của cơ quan truyền thông quan trọng." ,image: thang9_2Image}
    ],
    "2025-09-08": [
        { title: "Ngày Quốc tế Xóa nạn Mù chữ", year: 1967, summary: "Ngày nâng cao nhận thức về tầm quan trọng của việc biết chữ như một vấn đề nhân quyền và phẩm giá.",image: thang9_3Image }
    ],
    "2025-09-10": [
        { title: "Thành lập Mặt trận Tổ quốc VN", year: 1955, summary: "Ngày thành lập Mặt trận Tổ quốc Việt Nam.",image: thang9_4Image }
    ],
    "2025-09-21": [
        { title: "Ngày Hòa bình Quốc tế", year: 1981, summary: "Ngày dành để củng cố lý tưởng hòa bình giữa các dân tộc.",image: thang9_5Image }
    ],
    "2025-09-27": [
        { title: "Ngày Du lịch Thế giới", year: 1980, summary: "Ngày nâng cao nhận thức về vai trò của du lịch trong cộng đồng quốc tế." ,image: thang9_6Image}
    ],
    // --- THÁNG 10 (Index 9) ---
    "2025-10-01": [
        { title: "Ngày Quốc tế Người cao tuổi", year: 1991, summary: "Ngày tôn vinh và nâng cao nhận thức về vấn đề của người cao tuổi." ,image: thang10_1Image}
    ],
    "2025-10-10": [
        { title: "Ngày Giải phóng Thủ đô", year: 1954, summary: "Quân đội Nhân dân Việt Nam tiến vào tiếp quản Hà Nội.",image: thang10_2Image },
        { title: "Ngày truyền thống Luật sư Việt Nam", year: 2025, summary: "Tôn vinh nghề luật sư." ,image: thang10_7Image}
    ],
    "2025-10-13": [
        { title: "Ngày Doanh nhân Việt Nam", year: 2025, summary: "Tôn vinh vai trò của cộng đồng doanh nhân.",image: thang10_3Image }
    ],
    "2025-10-20": [
        { title: "Ngày Phụ nữ Việt Nam", year: 2025, summary: "Tôn vinh phụ nữ Việt Nam.",image: thang10_4Image}
    ],
    "2025-10-24": [
        { title: "Ngày Liên Hợp Quốc", year: 1945, summary: "Kỷ niệm ngày Hiến chương Liên Hợp Quốc có hiệu lực.",image: thang10_5Image }
    ],
    "2025-10-31": [
        { title: "Lễ Halloween", year: 2025, summary: "Lễ hội truyền thống phương Tây.",image: thang10_6Image }
    ],

    // --- THÁNG 11 (Index 10) ---
    "2025-11-09": [
        { title: "Ngày Pháp luật Việt Nam", year: 2013, summary: "Ngày tôn vinh Hiến pháp và pháp luật." ,image: thang11_1Image}
    ],
    "2025-11-20": [
        { title: "Ngày Nhà giáo Việt Nam", year: 1982, summary: "Tôn vinh các thầy cô giáo.",image: thang11_2Image }
    ],
    "2025-11-23": [
        { title: "Ngày Nam Kỳ Khởi Nghĩa", year: 1940, summary: "Cuộc khởi nghĩa vũ trang chống Pháp tại Nam Kỳ.",image: thang11_3Image }
    ],
    "2025-11-27": [
        { title: "Lễ Tạ Ơn (Thanksgiving)", year: 2025, summary: "Ngày lễ truyền thống lớn tại Mỹ (Thứ Năm tuần 4).",image: thang11_4Image}
    ],
    "2025-11-29": [
        { title: "Thứ Sáu Đen (Black Friday)", year: 2025, summary: "Ngày mua sắm giảm giá lớn (Thứ Sáu sau Lễ Tạ Ơn).",image: thang11_5Image }
    ],

    // --- THÁNG 12 (Index 11) ---
    "2025-12-01": [
        { title: "Ngày Thế giới phòng chống AIDS", year: 1988, summary: "Ngày nâng cao nhận thức về đại dịch AIDS." ,image: thang12_1Image}
    ],
    "2025-12-10": [
        { title: "Ngày Quốc tế Nhân quyền", year: 1948, summary: "Đại hội đồng LHQ thông qua Tuyên ngôn Thế giới về Nhân quyền.",image: thang12_2Image }
    ],
    "2025-12-19": [
        { title: "Ngày Toàn quốc Kháng chiến", year: 1946, summary: "Chủ tịch Hồ Chí Minh ra Lời kêu gọi toàn quốc kháng chiến." ,image: thang12_3Image}
    ],
    "2025-12-22": [
        { title: "Thành lập Quân đội Nhân dân Việt Nam", year: 1944, summary: "Ngày thành lập Đội Việt Nam Tuyên truyền Giải phóng quân.",image: thang12_4Image}
    ],
    "2025-12-25": [
        { title: "Lễ Giáng sinh", year: 2025, summary: "Ngày lễ tôn giáo quan trọng của người Công giáo và Kitô giáo.",image: thang12_5Image }
    ],
    "2025-12-31": [
        { title: "Đêm Giao thừa (New Year's Eve)", year: 2025, summary: "Đêm cuối cùng của năm, chuẩn bị chào đón năm mới." ,image: thang12_6Image}
    ],
};

const MONTH_NAMES = [
    "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6",
    "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"
];

// Hàm này không cần thay đổi
function getMonthGrid(year, monthZeroBased) {
    const first = new Date(year, monthZeroBased, 1);
    const last = new Date(year, monthZeroBased + 1, 0);
    const daysInMonth = last.getDate();
    const startDay = first.getDay();

    const grid = [];
    let week = new Array(7).fill(null);
    let day = 1;

    // Xây dựng các tuần
    for (let i = startDay; i < 7; i++) {
        week[i] = { day, date: new Date(year, monthZeroBased, day) };
        day++;
    }
    grid.push(week);

    while (day <= daysInMonth) {
        week = new Array(7).fill(null);
        for (let i = 0; i < 7 && day <= daysInMonth; i++) {
            week[i] = { day, date: new Date(year, monthZeroBased, day) };
            day++;
        }
        grid.push(week);
    }
    
    // LOGIC CỐ ĐỊNH 6 TUẦN: Thêm tuần trống nếu ít hơn 6 tuần
    while (grid.length < 6) {
        grid.push(new Array(7).fill(null));
    }
    
    return grid;
}

export default function Calendar2025() {
    // Khởi tạo với tháng 11 (index 10)
    const [currentMonth, setCurrentMonth] = useState(10); 
    const [selectedDate, setSelectedDate] = useState(null);
    
    const monthGrid = useMemo(() => getMonthGrid(YEAR, currentMonth), [currentMonth]);

    // Hàm tạo chuỗi ISO (YYYY-MM-DD) không cần thay đổi
    const iso = (d) => {
        const y = d.getFullYear();
        const m = String(d.getMonth() + 1).padStart(2, "0");
        const day = String(d.getDate()).padStart(2, "0");
        return `${y}-${m}-${day}`;
    };

    const eventsFor = (dateIso) => EVENTS[dateIso] || [];
    
    const prevMonth = () => {
        setSelectedDate(null);
        // Đảm bảo setCurrentMonth sử dụng function form cho state mới nhất
        setCurrentMonth(m => (m === 0 ? 11 : m - 1));
    };

    const nextMonth = () => {
        setSelectedDate(null);
        setCurrentMonth(m => (m === 11 ? 0 : m + 1));
    };

    // Hàm tiện ích để định dạng ngày được chọn
    const formatSelectedDate = () => {
        if (!selectedDate) return "Chọn một ngày để xem sự kiện";
        try {
            const [y, m, d] = selectedDate.split('-');
            // Định dạng lại thành 'Ngày DD/MM/YYYY' cho tiêu đề đẹp hơn
            return `Sự kiện ngày ${d}/${m}/${y}`;
        } catch (error) {
            return `Sự kiện ngày ${selectedDate}`; // Dùng định dạng cũ nếu lỗi
        }
    }


    return (
        <div className="calendar-page-container">
            <div className="calendar-main-card">
                {/* --- CỘT TRÁI: LỊCH --- */}
                <div className="calendar-grid-section">
                    {/* PHẦN ĐIỀU KHIỂN THÁNG */}
                    <div className="calendar-header-controls">
                        <button onClick={prevMonth} className="control-button" aria-label="Tháng trước">{"<"}</button>
                        <h1 className="calendar-title">
                            {MONTH_NAMES[currentMonth]} / {YEAR}
                        </h1>
                        <button onClick={nextMonth} className="control-button" aria-label="Tháng sau">{">"}</button>
                    </div>

                    <p className="calendar-subtitle">
                        Bấm vào một ngày để xem sự kiện
                    </p>

                    {/* Hàng tiêu đề thứ */}
                    <div className="calendar-weekdays-header">
                        <div>CN</div>
                        <div>T2</div>
                        <div>T3</div>
                        <div>T4</div>
                        <div>T5</div>
                        <div>T6</div>
                        <div>T7</div>
                    </div>

                    {/* Lưới ngày */}
                    <div className="calendar-day-grid">
                        {monthGrid.map((week, wi) =>
                            week.map((cell, ci) => {
                                // Xác định ô trống thừa (từ tuần thứ 5 trở đi)
                                const isExtraEmpty = !cell && wi >= 5; 
                                if (!cell)
                                    // Sửa lại key cho đơn giản hơn
                                    return <div key={`empty-${wi}-${ci}`} className={`day-cell-empty ${isExtraEmpty ? 'day-cell-extra' : ''}`} />;
                                
                                const dateIso = iso(cell.date);
                                const events = eventsFor(dateIso); 
                                const hasEvents = events.length > 0;
                                const isSelected = selectedDate === dateIso;
                                
                                let buttonClass = 'day-button ';
                                if (isSelected) {
                                    buttonClass += 'day-button-selected';
                                } else if (hasEvents) {
                                    buttonClass += 'day-button-event';
                                } else {
                                    buttonClass += 'day-button-default';
                                }

                                // 💡 LOGIC TITLE/TOOLTIP
                                const buttonTitle = hasEvents 
                                    ? "Sự kiện: " + events.map(e => e.title).join('; ') 
                                    : `Ngày ${cell.day}`; 

                                return (
                                    <button
                                        key={dateIso} // SỬ DỤNG dateIso làm key là duy nhất và tốt hơn
                                        onClick={() => setSelectedDate(dateIso)}
                                        className={buttonClass}
                                        title={buttonTitle} // Thêm Tooltip
                                        aria-label={`Ngày ${cell.day}: ${hasEvents ? events.map(e => e.title).join(', ') : 'Không có sự kiện'}`}
                                    >
                                        {cell.day}
                                    </button>
                                );
                            })
                        )}
                    </div>
                    
                </div>

                {/* --- CỘT PHẢI: NỘI DUNG SỰ KIỆN --- */}
                <div className="event-detail-section">
                    <h2 className="event-detail-title">
                        {formatSelectedDate()}
                    </h2>

                    {selectedDate && eventsFor(selectedDate).length > 0 ? (
                        eventsFor(selectedDate).map((e, idx) => (
                            <div
                                key={e.title + idx} // Key dựa trên tiêu đề và index (đảm bảo duy nhất)
                                className="event-card"
                            >
                                <h3 className="event-title">
                                    {e.title} 
                                    {/* Thêm năm ghi nhận ngay bên cạnh tiêu đề */}
                                    <span className="event-year-inline"> ({e.year})</span>
                                </h3>
                                
                                {/* 💡 HIỂN THỊ ẢNH NẾU CÓ */}
                                {e.image && (
                                    <img 
                                        src={e.image} 
                                        alt={e.title} 
                                        className="event-image" 
                                    />
                                )}
                                <p className="event-summary">{e.summary}</p>
                                
                                {/* <p className="event-year">
                                    Năm ghi nhận: {e.year} // Đã chuyển lên tiêu đề
                                </p> */}
                            </div>
                        ))
                    ) : selectedDate ? (
                        <p className="no-event-message">Không có sự kiện nào trong ngày này.</p>
                    ) : (
                        <div className="initial-prompt">
                            👈 Hãy chọn một ngày ở bên trái
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}