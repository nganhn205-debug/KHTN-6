export type Question = {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  type?: "multiple-choice" | "true-false";
  level?: "NB" | "TH" | "VD";
};

export type Quiz = {
  title: string;
  questions: Question[];
};

export const quizzes: Record<number, Quiz> = 
{
  "1": {
    "title": "Bài 9. Sự Đa Dạng Của Chất",
    "questions": [
      {
        "question": "Vật thể nào sau đây là vật thể tự nhiên?",
        "options": [
          "Chiếc bàn gỗ",
          "Con sông",
          "Cái xe đạp",
          "Quyển sách"
        ],
        "correct": 1,
        "explanation": "Con sông có sẵn trong tự nhiên, không do con người tạo ra.",
        "type": "multiple-choice",
        "level": "NB"
      },
      {
        "question": "Chất nào sau đây tạo nên vật thể là chiếc cốc thủy tinh?",
        "options": [
          "Nhôm",
          "Nhựa",
          "Thủy tinh",
          "Gỗ"
        ],
        "correct": 2,
        "explanation": "Đáp án đúng là C.",
        "type": "multiple-choice",
        "level": "NB"
      },
      {
        "question": "Một vật thể chỉ có thể được tạo thành từ đúng một chất duy nhất.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": 1,
        "explanation": "Một vật thể có thể được tạo nên từ nhiều chất khác nhau (ví dụ: chiếc bút chì gồm gỗ và than chì).",
        "type": "true-false",
        "level": "NB"
      },
      {
        "question": "Khả năng bị gỉ của sắt khi tiếp xúc với không khí ẩm thuộc loại tính chất nào?",
        "options": [
          "Tính chất vật lý",
          "Tính chất hóa học",
          "Cả hai loại",
          "Không thuộc loại nào"
        ],
        "correct": 1,
        "explanation": "Gỉ sắt là quá trình sắt biến thành chất mới (oxit sắt), đó là tính chất hóa học.",
        "type": "multiple-choice",
        "level": "TH"
      },
      {
        "question": "Màu sắc, mùi vị, nhiệt độ sôi của một chất là những ví dụ về:",
        "options": [
          "Tính chất hóa học",
          "Tính chất sinh học",
          "Tính chất vật lý",
          "Tính chất cơ học"
        ],
        "correct": 2,
        "explanation": "Đáp án đúng là C.",
        "type": "multiple-choice",
        "level": "TH"
      },
      {
        "question": "Vật sống và vật không sống đều là vật thể.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": 0,
        "explanation": "Vật thể gồm tất cả những gì tồn tại quanh ta, bao gồm cả vật sống (cây, động vật) và vật không sống (đá, bàn ghế).",
        "type": "true-false",
        "level": "TH"
      },
      {
        "question": "Đặc điểm nào sau đây KHÔNG phải của vật sống?",
        "options": [
          "Lớn lên theo thời gian",
          "Sinh sản",
          "Dẫn nhiệt tốt",
          "Trao đổi chất với môi trường"
        ],
        "correct": 2,
        "explanation": "Dẫn nhiệt tốt là tính chất vật lý của chất, không phải đặc điểm của vật sống.",
        "type": "multiple-choice",
        "level": "TH"
      },
      {
        "question": "Người ta làm vỏ dây điện bằng nhựa vì nhựa có tính chất nào phù hợp?",
        "options": [
          "Dẫn điện tốt",
          "Không dẫn điện, bền",
          "Dẫn nhiệt tốt",
          "Trong suốt"
        ],
        "correct": 1,
        "explanation": "Nhựa không dẫn điện nên dùng bọc ngoài lõi kim loại để cách điện, đảm bảo an toàn.",
        "type": "multiple-choice",
        "level": "VD"
      },
      {
        "question": "Trong các vật sau, vật nào vừa là vật thể nhân tạo vừa được làm từ nhiều chất?",
        "options": [
          "Tảng đá",
          "Cây cối",
          "Chiếc xe đạp",
          "Hòn than"
        ],
        "correct": 2,
        "explanation": "Xe đạp do con người làm ra (nhân tạo) và được tạo từ nhiều chất: sắt, cao su, nhựa...",
        "type": "multiple-choice",
        "level": "VD"
      },
      {
        "question": "Biết được tính chất của chất giúp con người lựa chọn vật liệu phù hợp cho từng mục đích sử dụng.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": 0,
        "explanation": "Ví dụ chọn kim loại làm nồi vì dẫn nhiệt tốt, chọn cao su làm lốp xe vì đàn hồi tốt.",
        "type": "true-false",
        "level": "VD"
      }
    ]
  },
  "2": {
    "title": "Bài 10. Các Thể Của Chất Và Sự Chuyển Thể",
    "questions": [
      {
        "question": "Chất ở thể nào có hình dạng và thể tích xác định?",
        "options": [
          "Thể khí",
          "Thể lỏng",
          "Thể rắn",
          "Cả ba thể"
        ],
        "correct": 2,
        "explanation": "Đáp án đúng là C.",
        "type": "multiple-choice",
        "level": "NB"
      },
      {
        "question": "Quá trình nước lỏng chuyển sang nước đá gọi là:",
        "options": [
          "Nóng chảy",
          "Bay hơi",
          "Ngưng tụ",
          "Đông đặc"
        ],
        "correct": 3,
        "explanation": "Đáp án đúng là D.",
        "type": "multiple-choice",
        "level": "NB"
      },
      {
        "question": "Chất khí có thể tích xác định nhưng không có hình dạng xác định.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": 1,
        "explanation": "Chất khí không có cả hình dạng lẫn thể tích xác định; nó chiếm toàn bộ không gian của vật chứa.",
        "type": "true-false",
        "level": "NB"
      },
      {
        "question": "Vì sao chất khí dễ bị nén hơn chất rắn?",
        "options": [
          "Chất khí nhẹ hơn chất rắn",
          "Các hạt trong chất khí ở rất xa nhau, có nhiều khoảng trống",
          "Chất khí không có màu sắc",
          "Chất khí không có hình dạng xác định"
        ],
        "correct": 1,
        "explanation": "Đáp án đúng là B.",
        "type": "multiple-choice",
        "level": "TH"
      },
      {
        "question": "Sự bay hơi khác sự sôi ở điểm nào?",
        "options": [
          "Bay hơi chỉ xảy ra ở thể lỏng, sôi xảy ra ở thể rắn",
          "Bay hơi xảy ra ở bề mặt và mọi nhiệt độ; sôi xảy ra trong toàn bộ khối lỏng tại nhiệt độ sôi xác định",
          "Bay hơi làm chất nóng lên, sôi làm chất lạnh đi",
          "Không có sự khác nhau"
        ],
        "correct": 1,
        "explanation": "Đáp án đúng là B.",
        "type": "multiple-choice",
        "level": "TH"
      },
      {
        "question": "Khi nước đá tan thành nước lỏng, bản chất hóa học của chất đã thay đổi.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": 1,
        "explanation": "Nước đá và nước lỏng đều là nước (H₂O), chỉ thay đổi trạng thái (thể) chứ không thay đổi bản chất hóa học.",
        "type": "true-false",
        "level": "TH"
      },
      {
        "question": "Hiện tượng nào sau đây là sự ngưng tụ?",
        "options": [
          "Nước sôi bốc hơi",
          "Nước đá tan chảy",
          "Sương mù xuất hiện vào buổi sáng sớm",
          "Muối ăn tan trong nước"
        ],
        "correct": 2,
        "explanation": "Hơi nước trong không khí gặp lạnh ngưng tụ thành các hạt nước nhỏ, tạo ra sương mù.",
        "type": "multiple-choice",
        "level": "TH"
      },
      {
        "question": "Khi phơi quần áo ướt ngoài nắng, quần áo khô dần. Đây là hiện tượng gì?",
        "options": [
          "Đông đặc",
          "Nóng chảy",
          "Bay hơi",
          "Ngưng tụ"
        ],
        "correct": 2,
        "explanation": "Nước trong quần áo bay hơi vào không khí khi gặp nhiệt độ cao và thoáng gió.",
        "type": "multiple-choice",
        "level": "VD"
      },
      {
        "question": "Bơm xe đạp hoạt động được là do không khí (chất khí) có thể bị nén vào trong lốp xe.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": 0,
        "explanation": "Chất khí dễ bị nén vì các hạt còn nhiều khoảng cách, nên có thể bơm nhiều khí vào lốp xe.",
        "type": "true-false",
        "level": "VD"
      },
      {
        "question": "Đun nóng một thanh sáp (nến), sáp chuyển từ thể rắn sang thể lỏng. Quá trình này gọi là:",
        "options": [
          "Đông đặc",
          "Nóng chảy",
          "Bay hơi",
          "Ngưng tụ"
        ],
        "correct": 1,
        "explanation": "Đáp án đúng là B.",
        "type": "multiple-choice",
        "level": "VD"
      }
    ]
  },
  "3": {
    "title": "Bài 11. Oxygen Và Không Khí",
    "questions": [
      {
        "question": "Oxygen chiếm khoảng bao nhiêu phần trăm thể tích không khí?",
        "options": [
          "78%",
          "1%",
          "21%",
          "50%"
        ],
        "correct": 2,
        "explanation": "Đáp án đúng là C.",
        "type": "multiple-choice",
        "level": "NB"
      },
      {
        "question": "Oxygen có những tính chất vật lý nào sau đây?",
        "options": [
          "Có màu vàng, mùi hắc, nặng hơn không khí",
          "Không màu, không mùi, không vị, ít tan trong nước",
          "Có màu xanh, không mùi, tan nhiều trong nước",
          "Không màu, có mùi khai, nhẹ hơn không khí"
        ],
        "correct": 1,
        "explanation": "Đáp án đúng là B.",
        "type": "multiple-choice",
        "level": "NB"
      },
      {
        "question": "Nitrogen là thành phần chiếm tỉ lệ cao nhất trong không khí.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": 0,
        "explanation": "Nitrogen (N₂) chiếm khoảng 78% thể tích không khí, nhiều hơn oxygen (21%).",
        "type": "true-false",
        "level": "NB"
      },
      {
        "question": "Tại sao đậy nắp kín lên ngọn nến đang cháy có thể dập tắt lửa?",
        "options": [
          "Nắp làm giảm nhiệt độ ngọn lửa",
          "Nắp ngăn không cho oxygen tiếp xúc với vật cháy",
          "Nắp làm tăng lượng carbon dioxide",
          "Nắp làm nhiên liệu bị ướt"
        ],
        "correct": 1,
        "explanation": "Thiếu oxygen, sự cháy không thể tiếp tục duy trì.",
        "type": "multiple-choice",
        "level": "TH"
      },
      {
        "question": "Nguyên nhân chủ yếu gây ô nhiễm không khí là:",
        "options": [
          "Gió mạnh và bão",
          "Khí thải từ giao thông, công nghiệp và đốt nhiên liệu",
          "Sự quang hợp của thực vật",
          "Hơi nước bốc lên từ biển"
        ],
        "correct": 1,
        "explanation": "Đáp án đúng là B.",
        "type": "multiple-choice",
        "level": "TH"
      },
      {
        "question": "Oxygen không cần thiết cho sự hô hấp của thực vật.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": 1,
        "explanation": "Thực vật cũng hô hấp và cần oxygen, chỉ khác là ban ngày thực vật quang hợp tạo ra oxygen nhiều hơn lượng dùng cho hô hấp.",
        "type": "true-false",
        "level": "TH"
      },
      {
        "question": "Hoạt động nào sau đây giúp bảo vệ môi trường không khí?",
        "options": [
          "Đốt rác tại chỗ",
          "Trồng nhiều cây xanh và sử dụng phương tiện công cộng",
          "Tăng cường dùng nhiên liệu hóa thạch",
          "Mở rộng khu công nghiệp không xử lý khí thải"
        ],
        "correct": 1,
        "explanation": "Đáp án đúng là B.",
        "type": "multiple-choice",
        "level": "TH"
      },
      {
        "question": "Bình chữa cháy CO₂ hoạt động dựa trên nguyên tắc nào?",
        "options": [
          "Làm lạnh đám cháy xuống dưới nhiệt độ bắt cháy",
          "Phun nước dập tắt nhiên liệu",
          "Phun khí CO₂ để ngăn oxygen tiếp cận đám cháy",
          "Hút toàn bộ không khí ra khỏi khu vực cháy"
        ],
        "correct": 2,
        "explanation": "CO₂ phủ lên đám cháy, cô lập oxygen và dập tắt lửa.",
        "type": "multiple-choice",
        "level": "VD"
      },
      {
        "question": "Khi cháy rừng xảy ra, lượng CO₂ trong không khí tăng lên và góp phần gây hiệu ứng nhà kính.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": 0,
        "explanation": "Cháy rừng đốt cháy sinh khối, thải lượng lớn CO₂ vào khí quyển, đồng thời làm giảm lượng cây hấp thụ CO₂.",
        "type": "true-false",
        "level": "VD"
      },
      {
        "question": "Khi lặn sâu dưới nước, thợ lặn phải mang bình khí oxygen vì:",
        "options": [
          "Dưới nước không có nước",
          "Dưới nước không có đủ oxygen hòa tan để hô hấp",
          "Dưới nước áp suất quá thấp",
          "Nước biển có nhiều muối độc hại"
        ],
        "correct": 1,
        "explanation": "Lượng oxygen hòa tan trong nước rất ít, không đủ cho người hô hấp bình thường.",
        "type": "multiple-choice",
        "level": "VD"
      }
    ]
  },
  "4": {
    "title": "Bài 12. Một Số Vật Liệu Thông Dụng",
    "questions": [
      {
        "question": "Vật liệu nào sau đây có tính dẫn điện tốt?",
        "options": [
          "Nhựa",
          "Cao su",
          "Thủy tinh",
          "Kim loại (đồng, nhôm)"
        ],
        "correct": 3,
        "explanation": "Đáp án đúng là D.",
        "type": "multiple-choice",
        "level": "NB"
      },
      {
        "question": "Tính chất nào sau đây là đặc điểm của cao su?",
        "options": [
          "Dẫn điện tốt, cứng",
          "Đàn hồi, không thấm nước, không dẫn điện",
          "Trong suốt, dễ vỡ",
          "Dẻo, dễ bị gỉ"
        ],
        "correct": 1,
        "explanation": "Đáp án đúng là B.",
        "type": "multiple-choice",
        "level": "NB"
      },
      {
        "question": "Gốm, sứ là vật liệu chịu nhiệt tốt nhưng dễ vỡ.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": 0,
        "explanation": "Đáp án đúng là Đúng.",
        "type": "true-false",
        "level": "NB"
      },
      {
        "question": "Vì sao nhựa gây ô nhiễm môi trường lâu dài hơn gỗ?",
        "options": [
          "Nhựa nặng hơn gỗ",
          "Nhựa rất khó phân hủy trong tự nhiên",
          "Nhựa dẫn nhiệt tốt hơn gỗ",
          "Nhựa có màu sặc sỡ"
        ],
        "correct": 1,
        "explanation": "Nhựa có thể tồn tại hàng trăm đến hàng nghìn năm trong môi trường.",
        "type": "multiple-choice",
        "level": "TH"
      },
      {
        "question": "Tại sao kim loại thường được dùng làm nồi, xoong?",
        "options": [
          "Kim loại không dẫn điện",
          "Kim loại nhẹ và dễ vỡ",
          "Kim loại dẫn nhiệt tốt, chịu được nhiệt độ cao",
          "Kim loại trong suốt"
        ],
        "correct": 2,
        "explanation": "Đáp án đúng là C.",
        "type": "multiple-choice",
        "level": "TH"
      },
      {
        "question": "Thủy tinh được ưu tiên dùng làm vật liệu xây dựng cầu đường vì cứng và bền.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": 1,
        "explanation": "Thủy tinh cứng nhưng dễ vỡ, không phù hợp làm vật liệu xây dựng kết cấu chịu lực.",
        "type": "true-false",
        "level": "TH"
      },
      {
        "question": "Vật liệu nào phù hợp nhất để làm lốp xe?",
        "options": [
          "Thủy tinh",
          "Kim loại",
          "Cao su",
          "Gốm sứ"
        ],
        "correct": 2,
        "explanation": "Cao su có tính đàn hồi, không thấm nước, chịu được ma sát tốt.",
        "type": "multiple-choice",
        "level": "TH"
      },
      {
        "question": "Tay cầm của xoong nấu thường được làm bằng nhựa chịu nhiệt hoặc gỗ, không làm bằng kim loại. Lý do chính là:",
        "options": [
          "Kim loại đắt tiền hơn",
          "Kim loại dẫn nhiệt tốt, cầm vào dễ bỏng tay",
          "Kim loại không đẹp",
          "Kim loại quá nặng"
        ],
        "correct": 1,
        "explanation": "Đáp án đúng là B.",
        "type": "multiple-choice",
        "level": "VD"
      },
      {
        "question": "Hạn chế sử dụng túi nhựa một lần và thay bằng túi vải là hành động bảo vệ môi trường.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": 0,
        "explanation": "Túi vải tái sử dụng được nhiều lần và phân hủy tự nhiên dễ hơn nhựa.",
        "type": "true-false",
        "level": "VD"
      },
      {
        "question": "Khi xây nhà, người ta dùng gạch, xi măng, cát, thép... Đây là các:",
        "options": [
          "Nguyên liệu thô chưa qua chế biến",
          "Vật liệu xây dựng đã qua chế biến",
          "Nhiên liệu",
          "Lương thực, thực phẩm"
        ],
        "correct": 1,
        "explanation": "Đáp án đúng là B.",
        "type": "multiple-choice",
        "level": "VD"
      }
    ]
  },
  "5": {
    "title": "Bài 13. Một Số Nguyên Liệu Thông Dụng",
    "questions": [
      {
        "question": "Nguyên liệu là:",
        "options": [
          "Sản phẩm hoàn chỉnh để bán ra thị trường",
          "Chất hoặc vật liệu tự nhiên dùng làm đầu vào để sản xuất ra vật liệu hoặc sản phẩm khác",
          "Chất thải từ quá trình sản xuất",
          "Thức ăn cho con người"
        ],
        "correct": 1,
        "explanation": "Đáp án đúng là B.",
        "type": "multiple-choice",
        "level": "NB"
      },
      {
        "question": "Đá vôi là nguyên liệu chính để sản xuất ra:",
        "options": [
          "Nhựa và cao su",
          "Vôi và xi măng",
          "Xăng và dầu",
          "Giấy và bìa"
        ],
        "correct": 1,
        "explanation": "Đáp án đúng là B.",
        "type": "multiple-choice",
        "level": "NB"
      },
      {
        "question": "Dầu mỏ là nguyên liệu dùng để sản xuất nhựa và nhiên liệu.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": 0,
        "explanation": "Dầu mỏ là nguyên liệu đầu vào cho ngành hóa dầu sản xuất nhựa, xăng, dầu diesel...",
        "type": "true-false",
        "level": "NB"
      },
      {
        "question": "Điểm khác nhau cơ bản giữa nguyên liệu và vật liệu là:",
        "options": [
          "Nguyên liệu đắt hơn vật liệu",
          "Nguyên liệu là đầu vào tự nhiên; vật liệu đã qua chế biến để dùng trực tiếp tạo ra sản phẩm",
          "Nguyên liệu chỉ có ở dạng rắn",
          "Vật liệu chỉ dùng trong xây dựng"
        ],
        "correct": 1,
        "explanation": "Đáp án đúng là B.",
        "type": "multiple-choice",
        "level": "TH"
      },
      {
        "question": "Gỗ là nguyên liệu để sản xuất ra những sản phẩm nào?",
        "options": [
          "Xăng dầu và nhựa",
          "Xi măng và gạch",
          "Giấy và đồ nội thất",
          "Thủy tinh và gốm sứ"
        ],
        "correct": 2,
        "explanation": "Đáp án đúng là C.",
        "type": "multiple-choice",
        "level": "TH"
      },
      {
        "question": "Khai thác nguyên liệu quá mức không gây hại cho môi trường nếu làm cẩn thận.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": 1,
        "explanation": "Khai thác quá mức luôn gây hậu quả: cạn kiệt tài nguyên, sạt lở, phá rừng, ô nhiễm nguồn nước...",
        "type": "true-false",
        "level": "TH"
      },
      {
        "question": "Cát và đất sét là nguyên liệu của ngành sản xuất nào?",
        "options": [
          "Luyện kim",
          "Chế biến thực phẩm",
          "Sản xuất thủy tinh, gốm, gạch",
          "Lọc dầu"
        ],
        "correct": 2,
        "explanation": "Đáp án đúng là C.",
        "type": "multiple-choice",
        "level": "TH"
      },
      {
        "question": "Để có thép làm cầu đường, người ta phải bắt đầu từ:",
        "options": [
          "Cát và đá vôi",
          "Quặng sắt khai thác từ lòng đất",
          "Dầu mỏ",
          "Gỗ rừng"
        ],
        "correct": 1,
        "explanation": "Quặng sắt là nguyên liệu đầu vào để luyện thành sắt, rồi chế thành thép.",
        "type": "multiple-choice",
        "level": "VD"
      },
      {
        "question": "Sử dụng giấy tái chế giúp giảm lượng gỗ khai thác, góp phần bảo vệ rừng.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": 0,
        "explanation": "Đáp án đúng là Đúng.",
        "type": "true-false",
        "level": "VD"
      },
      {
        "question": "Một học sinh nói: \"Quặng nhôm và tấm nhôm dùng làm cửa sổ đều là vật liệu.\" Nhận xét đó:",
        "options": [
          "Đúng hoàn toàn",
          "Sai hoàn toàn — cả hai đều là nguyên liệu",
          "Sai — quặng nhôm là nguyên liệu; tấm nhôm mới là vật liệu",
          "Đúng vì cả hai đều từ nhôm mà ra"
        ],
        "correct": 2,
        "explanation": "Đáp án đúng là C.",
        "type": "multiple-choice",
        "level": "VD"
      }
    ]
  },
  "6": {
    "title": "Bài 14. Một Số Nhiên Liệu",
    "questions": [
      {
        "question": "Ba loại nhiên liệu hóa thạch phổ biến nhất là:",
        "options": [
          "Gỗ, than củi, rơm rạ",
          "Than đá, dầu mỏ, khí thiên nhiên",
          "Điện, năng lượng mặt trời, gió",
          "Biogas, ethanol, than sinh học"
        ],
        "correct": 1,
        "explanation": "Đáp án đúng là B.",
        "type": "multiple-choice",
        "level": "NB"
      },
      {
        "question": "Vì sao nhiên liệu hóa thạch được gọi là nguồn năng lượng không tái tạo?",
        "options": [
          "Vì chúng không cháy được",
          "Vì chúng hình thành rất chậm (hàng triệu năm) trong khi bị khai thác nhanh",
          "Vì chúng không có trong tự nhiên",
          "Vì chúng không tạo ra nhiệt năng"
        ],
        "correct": 1,
        "explanation": "Đáp án đúng là B.",
        "type": "multiple-choice",
        "level": "NB"
      },
      {
        "question": "Khi đốt nhiên liệu, nhiên liệu kết hợp với oxygen tạo ra nhiệt năng.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": 0,
        "explanation": "Đáp án đúng là Đúng.",
        "type": "true-false",
        "level": "NB"
      },
      {
        "question": "Khí nào sinh ra khi nhiên liệu cháy không hoàn toàn và gây độc hại cho sức khỏe?",
        "options": [
          "Oxygen (O₂)",
          "Nitrogen (N₂)",
          "Carbon monoxide (CO)",
          "Hơi nước (H₂O)"
        ],
        "correct": 2,
        "explanation": "CO là khí độc, sinh ra khi nhiên liệu cháy không đủ oxygen.",
        "type": "multiple-choice",
        "level": "TH"
      },
      {
        "question": "Việc sử dụng nhiều nhiên liệu hóa thạch gây ra tác hại gì cho môi trường?",
        "options": [
          "Làm giảm lượng oxygen trong không khí xuống dưới 10%",
          "Tăng lượng CO₂, gây hiệu ứng nhà kính và biến đổi khí hậu",
          "Làm tăng lượng nitrogen trong không khí",
          "Không gây hại gì đáng kể"
        ],
        "correct": 1,
        "explanation": "Đáp án đúng là B.",
        "type": "multiple-choice",
        "level": "TH"
      },
      {
        "question": "Biogas là nhiên liệu tái tạo vì có thể sản xuất lại từ chất thải hữu cơ.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": 0,
        "explanation": "Biogas được tạo ra từ quá trình phân hủy chất thải hữu cơ, có thể tái tạo liên tục.",
        "type": "true-false",
        "level": "TH"
      },
      {
        "question": "Để sử dụng nhiên liệu an toàn khi đun nấu bằng gas, cần chú ý điều gì?",
        "options": [
          "Đun lửa to nhất để tiết kiệm thời gian",
          "Đảm bảo thông gió, kiểm tra van gas, tắt bếp khi không dùng",
          "Để bình gas gần bếp cho tiện",
          "Dùng gas càng nhiều càng tốt"
        ],
        "correct": 1,
        "explanation": "Đáp án đúng là B.",
        "type": "multiple-choice",
        "level": "TH"
      },
      {
        "question": "Gia đình nào dưới đây sử dụng nhiên liệu tiết kiệm và thân thiện môi trường hơn?",
        "options": [
          "Gia đình A dùng điều hòa suốt ngày và để đèn sáng cả nhà",
          "Gia đình B lắp điện mặt trời, đi xe đạp và tắt thiết bị điện khi không dùng",
          "Gia đình C đốt than để sưởi ấm trong nhà kín",
          "Gia đình D đốt rác hàng ngày trong vườn"
        ],
        "correct": 1,
        "explanation": "Đáp án đúng là B.",
        "type": "multiple-choice",
        "level": "VD"
      },
      {
        "question": "Tắt đèn, quạt khi ra khỏi phòng là hành động tiết kiệm năng lượng và bảo vệ môi trường.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": 0,
        "explanation": "Đáp án đúng là Đúng.",
        "type": "true-false",
        "level": "VD"
      },
      {
        "question": "Người ta khuyến khích chuyển từ xe máy xăng sang xe máy điện vì lý do chính nào?",
        "options": [
          "Xe điện chạy nhanh hơn",
          "Xe điện không thải khí độc trực tiếp ra môi trường, giảm ô nhiễm không khí",
          "Xe điện rẻ hơn xe xăng",
          "Xe điện không cần bảo dưỡng"
        ],
        "correct": 1,
        "explanation": "Đáp án đúng là B.",
        "type": "multiple-choice",
        "level": "VD"
      }
    ]
  },
  "7": {
    "title": "Bài 15. Một Số Lương Thực, Thực Phẩm",
    "questions": [
      {
        "question": "Nhóm chất nào là nguồn cung cấp năng lượng chính cho cơ thể?",
        "options": [
          "Vitamin",
          "Chất khoáng",
          "Carbohydrate (tinh bột, đường)",
          "Nước"
        ],
        "correct": 2,
        "explanation": "Đáp án đúng là C.",
        "type": "multiple-choice",
        "level": "NB"
      },
      {
        "question": "Protein (chất đạm) có vai trò chủ yếu nào đối với cơ thể?",
        "options": [
          "Cung cấp vitamin cho cơ thể",
          "Cấu tạo, duy trì và phát triển cơ thể",
          "Dự trữ năng lượng dài hạn",
          "Điều hòa nhiệt độ cơ thể"
        ],
        "correct": 1,
        "explanation": "Đáp án đúng là B.",
        "type": "multiple-choice",
        "level": "NB"
      },
      {
        "question": "Phần lớn vitamin cơ thể tự tổng hợp được mà không cần lấy từ thức ăn.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": 1,
        "explanation": "Hầu hết vitamin cơ thể không tự tổng hợp được; cần bổ sung qua thức ăn hằng ngày.",
        "type": "true-false",
        "level": "NB"
      },
      {
        "question": "Vì sao không nên ăn quá nhiều thực phẩm chứa nhiều chất béo?",
        "options": [
          "Chất béo không có vị ngon",
          "Thừa chất béo dễ gây béo phì, bệnh tim mạch, tiểu đường",
          "Chất béo làm giảm chiều cao",
          "Chất béo gây mất ngủ"
        ],
        "correct": 1,
        "explanation": "Đáp án đúng là B.",
        "type": "multiple-choice",
        "level": "TH"
      },
      {
        "question": "Thực phẩm bị mốc thì:",
        "options": [
          "Vẫn dùng được nếu rửa sạch",
          "Đã sinh ra chất có hại, không nên sử dụng",
          "Chỉ ngon hơn vì đã lên men",
          "Giàu dinh dưỡng hơn"
        ],
        "correct": 1,
        "explanation": "Vi nấm mốc sản sinh độc tố nguy hiểm cho sức khỏe.",
        "type": "multiple-choice",
        "level": "TH"
      },
      {
        "question": "Ăn uống đa dạng nhiều nhóm thực phẩm giúp cơ thể nhận đủ các chất dinh dưỡng cần thiết.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": 0,
        "explanation": "Đáp án đúng là Đúng.",
        "type": "true-false",
        "level": "TH"
      },
      {
        "question": "Calcium (canxi) có vai trò gì chính trong cơ thể?",
        "options": [
          "Cung cấp năng lượng tức thời",
          "Quan trọng cho sự phát triển và độ cứng của xương, răng",
          "Giúp tiêu hóa chất béo",
          "Điều hòa huyết áp"
        ],
        "correct": 1,
        "explanation": "Đáp án đúng là B.",
        "type": "multiple-choice",
        "level": "TH"
      },
      {
        "question": "Một học sinh thường xuyên ăn cơm, thịt, cá, rau, trái cây và uống sữa mỗi ngày. Em đó đang thực hiện:",
        "options": [
          "Chế độ ăn thiếu dinh dưỡng",
          "Chế độ ăn đa dạng, cân đối các nhóm chất dinh dưỡng",
          "Chế độ ăn quá nhiều tinh bột",
          "Chế độ ăn thuần chay"
        ],
        "correct": 1,
        "explanation": "Đáp án đúng là B.",
        "type": "multiple-choice",
        "level": "VD"
      },
      {
        "question": "Bảo quản thực phẩm trong tủ lạnh giúp làm chậm sự phát triển của vi sinh vật gây hỏng thức ăn.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": 0,
        "explanation": "Nhiệt độ thấp ức chế vi khuẩn và nấm mốc phát triển.",
        "type": "true-false",
        "level": "VD"
      },
      {
        "question": "Bạn An thiếu vitamin A. Bạn nên ăn thêm thực phẩm nào sau đây?",
        "options": [
          "Cơm trắng và bánh mì",
          "Cà rốt, gan, trứng (giàu vitamin A)",
          "Muối và đường",
          "Dầu ăn và mỡ"
        ],
        "correct": 1,
        "explanation": "Đáp án đúng là B.",
        "type": "multiple-choice",
        "level": "VD"
      }
    ]
  },
  "8": {
    "title": "Bài 16. Hỗn Hợp Các Chất",
    "questions": [
      {
        "question": "Chất nào sau đây là chất tinh khiết?",
        "options": [
          "Nước biển",
          "Không khí",
          "Nước cất",
          "Nước cam"
        ],
        "correct": 2,
        "explanation": "Nước cất chỉ gồm một chất duy nhất là H₂O.",
        "type": "multiple-choice",
        "level": "NB"
      },
      {
        "question": "Dung dịch là:",
        "options": [
          "Hỗn hợp không đồng nhất gồm chất rắn lơ lửng trong chất lỏng",
          "Hỗn hợp đồng nhất gồm dung môi và chất tan",
          "Hỗn hợp gồm hai chất lỏng không tan vào nhau",
          "Chất tinh khiết ở thể lỏng"
        ],
        "correct": 1,
        "explanation": "Đáp án đúng là B.",
        "type": "multiple-choice",
        "level": "NB"
      },
      {
        "question": "Nước đường là hỗn hợp đồng nhất.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": 0,
        "explanation": "Đường tan hoàn toàn trong nước, tạo thành dung dịch (hỗn hợp đồng nhất).",
        "type": "true-false",
        "level": "NB"
      },
      {
        "question": "Hỗn hợp nước và cát thuộc loại nào?",
        "options": [
          "Dung dịch",
          "Nhũ tương",
          "Huyền phù",
          "Chất tinh khiết"
        ],
        "correct": 2,
        "explanation": "Cát không tan, lơ lửng hoặc lắng trong nước, tạo thành huyền phù.",
        "type": "multiple-choice",
        "level": "TH"
      },
      {
        "question": "Dầu ăn trộn với giấm (vinaigrette) là ví dụ về:",
        "options": [
          "Dung dịch",
          "Huyền phù",
          "Nhũ tương",
          "Chất tinh khiết"
        ],
        "correct": 2,
        "explanation": "Dầu và giấm (nước) không tan vào nhau, tạo thành hệ nhũ tương.",
        "type": "multiple-choice",
        "level": "TH"
      },
      {
        "question": "Tính chất của hỗn hợp không phụ thuộc vào thành phần các chất có trong hỗn hợp đó.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": 1,
        "explanation": "Tính chất của hỗn hợp (màu, vị, nồng độ...) phụ thuộc vào loại và tỉ lệ các chất trong hỗn hợp.",
        "type": "true-false",
        "level": "TH"
      },
      {
        "question": "Muốn hòa tan nhanh hơn và nhiều muối hơn vào nước, nên làm gì?",
        "options": [
          "Dùng nước lạnh và khuấy nhẹ",
          "Dùng nước nóng và khuấy đều",
          "Để yên không khuấy",
          "Thêm dầu ăn vào hỗn hợp"
        ],
        "correct": 1,
        "explanation": "Nhiệt độ cao và khuấy đều đều làm tăng tốc độ và lượng muối tan.",
        "type": "multiple-choice",
        "level": "TH"
      },
      {
        "question": "Nước giải khát có gas là ví dụ về dạng hỗn hợp nào?",
        "options": [
          "Huyền phù",
          "Nhũ tương",
          "Chất tinh khiết",
          "Dung dịch (hỗn hợp đồng nhất)"
        ],
        "correct": 3,
        "explanation": "Đường, hương liệu và khí CO₂ tan vào nước tạo thành hỗn hợp đồng nhất.",
        "type": "multiple-choice",
        "level": "VD"
      },
      {
        "question": "Không khí là hỗn hợp đồng nhất của nhiều chất khí.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": 0,
        "explanation": "Các khí trong không khí (N₂, O₂, CO₂...) phân bố đều, không thể phân biệt ranh giới.",
        "type": "true-false",
        "level": "VD"
      },
      {
        "question": "Khi pha nước cam, bạn cho thêm càng nhiều đường thì:",
        "options": [
          "Vị ngọt giảm đi",
          "Nồng độ đường trong hỗn hợp tăng lên, vị ngọt tăng",
          "Hỗn hợp trở thành chất tinh khiết",
          "Màu nước cam trở nên đậm hơn"
        ],
        "correct": 1,
        "explanation": "Tính chất hỗn hợp thay đổi theo tỉ lệ thành phần.",
        "type": "multiple-choice",
        "level": "VD"
      }
    ]
  },
  "9": {
    "title": "Bài 17. Tách Chất Khỏi Hỗn Hợp",
    "questions": [
      {
        "question": "Phương pháp nào dùng để tách chất rắn không tan ra khỏi chất lỏng?",
        "options": [
          "Cô cạn",
          "Chiết",
          "Lọc",
          "Chưng cất"
        ],
        "correct": 2,
        "explanation": "Đáp án đúng là C.",
        "type": "multiple-choice",
        "level": "NB"
      },
      {
        "question": "Để tách muối ăn ra khỏi nước muối, người ta dùng phương pháp:",
        "options": [
          "Lọc",
          "Chiết",
          "Cô cạn",
          "Gạn"
        ],
        "correct": 2,
        "explanation": "Đun nóng để bay hơi hết nước, muối kết tinh lại.",
        "type": "multiple-choice",
        "level": "NB"
      },
      {
        "question": "Phương pháp chiết dùng để tách hai chất lỏng không tan vào nhau.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": 0,
        "explanation": "Đáp án đúng là Đúng.",
        "type": "true-false",
        "level": "NB"
      },
      {
        "question": "Cơ sở để lựa chọn phương pháp tách chất phù hợp là gì?",
        "options": [
          "Màu sắc của các chất",
          "Sự khác nhau về tính chất vật lý giữa các chất trong hỗn hợp (độ tan, nhiệt độ sôi, khối lượng riêng...)",
          "Giá thành của các chất",
          "Mùi của các chất"
        ],
        "correct": 1,
        "explanation": "Đáp án đúng là B.",
        "type": "multiple-choice",
        "level": "TH"
      },
      {
        "question": "Gạn khác lọc ở chỗ nào?",
        "options": [
          "Gạn dùng nhiệt, lọc dùng vật liệu lọc",
          "Gạn rót bỏ phần lỏng phía trên sau khi chất rắn đã lắng; lọc dùng vật liệu lọc giữ lại chất rắn",
          "Gạn tách chất lỏng-lỏng, lọc tách chất khí-lỏng",
          "Không có sự khác nhau"
        ],
        "correct": 1,
        "explanation": "Đáp án đúng là B.",
        "type": "multiple-choice",
        "level": "TH"
      },
      {
        "question": "Phương pháp lọc có thể dùng để tách muối ra khỏi nước muối vì muối là chất rắn.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": 1,
        "explanation": "Muối đã tan hoàn toàn trong nước (dạng dung dịch), không thể dùng lọc; phải dùng cô cạn.",
        "type": "true-false",
        "level": "TH"
      },
      {
        "question": "Người ta sản xuất muối ăn từ nước biển bằng cách:",
        "options": [
          "Lọc nước biển qua cát",
          "Chiết nước biển qua phễu",
          "Cho nước biển bay hơi dưới nắng (cô cạn)",
          "Gạn lớp muối nổi trên mặt nước"
        ],
        "correct": 2,
        "explanation": "Đáp án đúng là C.",
        "type": "multiple-choice",
        "level": "TH"
      },
      {
        "question": "Khi nấu canh riêu cua, lớp riêu nổi lên mặt nước và có thể hớt ra bằng thìa. Đây là ứng dụng của phương pháp tách chất nào?",
        "options": [
          "Lọc",
          "Gạn",
          "Chiết",
          "Cô cạn"
        ],
        "correct": 1,
        "explanation": "Hớt lớp riêu nổi phía trên là dạng gạn đơn giản.",
        "type": "multiple-choice",
        "level": "VD"
      },
      {
        "question": "Lọc nước sinh hoạt bằng bình lọc là ứng dụng của phương pháp lọc để loại bỏ các tạp chất không tan.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": 0,
        "explanation": "Đáp án đúng là Đúng.",
        "type": "true-false",
        "level": "VD"
      },
      {
        "question": "Hỗn hợp dầu ăn và nước cần tách ra. Phương pháp phù hợp nhất là:",
        "options": [
          "Lọc qua giấy lọc",
          "Cô cạn bằng nhiệt",
          "Chiết bằng phễu chiết dựa trên khối lượng riêng khác nhau",
          "Gạn lớp bột phía dưới"
        ],
        "correct": 2,
        "explanation": "Dầu nhẹ hơn nổi lên trên; dùng phễu chiết để tách riêng hai lớp chất lỏng.",
        "type": "multiple-choice",
        "level": "VD"
      }
    ]
  }
}
;
