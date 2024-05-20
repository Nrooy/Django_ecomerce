import { useState } from 'react';
import avt from '../../images/ip15.jpg'
import Nav from '../nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import { useEffect } from 'react';
import api_endpoint, { getProduct } from '../../utils/ApiEnpoint';
import { useNavigate } from 'react-router-dom';
import { Spin, Button } from 'antd';

import { getUser } from '../../utils/Utils'
import axios from 'axios';
import HomeItem from '../HomeItem';
function Home() {

    const [products, setProducts] = useState([])
    const [isDone, setIsDone] = useState(false)
    const [key, setKey] = useState('')
    const [loading, setLoading] = useState(false)
    const navi = useNavigate()
    useEffect(() => {
        // getProduct()
        //     .then(products => {
        //         console.log(products)
        //         setProducts(products);
        //         setIsDone(true)
        //     })
        //     .catch(error => {
        //         console.error('Error fetching products:', error);
        //     });

        setProducts([
            {
                "category": {
                    "id": 0,
                    "name": "Sách",
                    "type_product": "Book"
                },
                "items": [
                    {
                        "product_id": "B9dec643d-4486-4008-8ad5-ddd420d722b5",
                        "name": "Sức Hút Của Sự Điềm Tĩnh",
                        "author": "Tô Hoài",
                        "publisher": "Tuổi thơ",
                        "price": "12.00",
                        "description": "Đặc điểm nổi bật\r\nblue-check\r\nXây dựng sự điềm tĩnh trong hành động, lời nói và thái độ.\r\nblue-check\r\nPhát triển khả năng làm chủ cảm xúc và tạo ra khí chất riêng.\r\nblue-check\r\nTác giả có kinh nghiệm và kiến thức sâu sắc về vấn đề này.",
                        "image": "https://salt.tikicdn.com/cache/750x750/ts/product/5e/7d/c5/6caf6cf19d451fd5bbb40519ad8c01aa.png.webp",
                        "category_id": 0,
                        "type_product": "Sách"
                    },
                    {
                        "product_id": "B300188ed-9faa-4ad6-be88-84c539cd5411",
                        "name": "Điềm Tĩnh Và Nóng Giận",
                        "author": "Peter Paker",
                        "publisher": "Việt Nam",
                        "price": "10.00",
                        "description": "Đặc điểm nổi bật\r\nblue-check\r\nCung cấp câu chuyện thực tế, giúp người đọc nhìn nhận lại cảm xúc của bản thân.\r\nblue-check\r\nLời lẽ chân thành và sức thuyết phục, giúp người đọc suy ngẫm và học cách kiểm soát tâm trạng.\r\nblue-check\r\nTruyền cảm hứng sống đẹp và có ích cho mọi người.",
                        "image": "https://salt.tikicdn.com/cache/750x750/ts/product/60/f4/d1/0675631bc561ba2ffe709475cfab8728.jpg.webp",
                        "category_id": 0,
                        "type_product": "Sách"
                    },
                    {
                        "product_id": "Bd284a60f-1eb5-4c6a-87e8-ba08b6446049",
                        "name": "Hình Ảnh Của Bạn Đáng Giá Triệu Đô",
                        "author": "Tô Hoài",
                        "publisher": "Việt Nam",
                        "price": "15.00",
                        "description": "Hình Ảnh Của Bạn Đáng Giá Triệu Đô",
                        "image": "https://cdn0.fahasa.com/media/catalog/product/i/m/image_181017.jpg",
                        "category_id": 0,
                        "type_product": "Sách"
                    },
                    {
                        "product_id": "B2d02be4c-e165-4c95-baba-8b60f3f46950",
                        "name": "Bí Quyết Kinh Doanh",
                        "author": "Peter Paker",
                        "publisher": "Thế giới",
                        "price": "17.00",
                        "description": "Lập nghiệp khó, giữ được nghiệp còn khó hơn. Cuốn sách này kết hợp kinh nghiệm thành công và bài học thất bại của những người trước, giới thiệu và phân tích từng điều cho bạn. Bạn muốn biết công ty mình tại sao kinh doanh không tốt? Bạn muốn biết công ty mình đang tiềm ẩn vấn đề gì, cách giải quyết ra sao? Bạn muốn biết công ty mình còn có việc gì cần làm mà chưa làm được không? Muốn biết làm thế nào để đột phá được hiện trạng, để nghiệp vụ công ty ngày càng tiến bộ?… Tất cả những vấn đề đó đều có thể tìm thấy câu trả lời khiến bạn thỏa mãn.\r\n\r\nTác giả với cách nhìn sắc bén, kiến giải sâu sắc, phương án khéo léo chỉ ra con đường rộng mở cho các chủ công ty tư nhân kiếm được nhiều lợi nhuận.\r\n\r\nCuốn sách đã cố gắng tránh những lý luận giáo điều khô khan của các sách thương vụ, và cũng không kể lể rối rắm những kỳ tích làm giàu của các siêu phú ông, khó ai theo được, mà xuất phát từ tình hình thực tế của các công ty tư nhân, các doanh nghiệp vừa và nhỏ, nêu ra những ý kiến có tính chất chỉ đạo và cách làm thực dụng mới mẻ, xứng đáng là cuốn sách gối đầu giường của các doanh nghiệp và nhà buôn.\r\n\r\nMã hàng\t8935236421768\r\nTên Nhà Cung Cấp\tNhà Sách Minh Thắng\r\nTác giả\tSharon L Lechter, Greg Reid\r\nNXB\tNXB Dân Trí\r\nNăm XB\t2021\r\nTrọng lượng (gr)\t300\r\nKích Thước Bao Bì\t20.5 x 14.5 cm\r\nSố trang\t294\r\nHình thức\tBìa Mềm\r\nSản phẩm hiển thị trong\t\r\nNhà Sách Minh Thắng\r\nSản phẩm bán chạy nhất\tTop 100 sản phẩm Kỹ năng sống bán chạy của tháng\r\nGiá sản phẩm trên Fahasa.com đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận chuyển, phụ phí hàng cồng kềnh,...\r\nChính sách khuyến mãi trên Fahasa.com không áp dụng cho Hệ thống Nhà sách Fahasa trên toàn quốc\r\nLập nghiệp khó, giữ được nghiệp còn khó hơn. Cuốn sách này kết hợp kinh nghiệm thành công và bài học thất bại của những người trước, giới thiệu và phân tích từng điều cho bạn. Bạn muốn biết công ty mình tại sao kinh doanh không tốt? Bạn muốn biết công ty mình đang tiềm ẩn vấn đề gì, cách giải quyết ra sao? Bạn muốn biết công ty mình còn có việc gì cần làm mà chưa làm được không? Muốn biết làm thế nào để đột phá được hiện trạng, để nghiệp vụ công ty ngày càng tiến bộ?… Tất cả những vấn đề đó đều có thể tìm thấy câu trả lời khiến bạn thỏa mãn.\r\n\r\nTác giả với cách nhìn sắc bén, kiến giải sâu sắc, phương án khéo léo chỉ ra con đường rộng mở cho các chủ công ty tư nhân kiếm được nhiều lợi nhuận.\r\n\r\nCuốn sách đã cố gắng tránh những lý luận giáo điều khô khan của các sách thương vụ, và cũng không kể lể rối rắm những kỳ tích làm giàu của các siêu phú ông, khó ai theo được, mà xuất phát từ tình hình thực tế của các công ty tư nhân, các doanh nghiệp vừa và nhỏ, nêu ra những ý kiến có tính chất chỉ đạo và cách làm thực dụng mới mẻ, xứng đáng là cuốn sách gối đầu giường của các doanh nghiệp và nhà buôn.",
                        "image": "https://cdn0.fahasa.com/media/catalog/product/b/q/bqkd.jpg",
                        "category_id": 0,
                        "type_product": "Sách"
                    },
                    {
                        "product_id": "Bcc2df10b-0eca-4e92-8259-5be6f8a2d019",
                        "name": "Khi Lời Nói Dối Là Vũ Khí",
                        "author": "Peter Paker",
                        "publisher": "Thế giới",
                        "price": "9.00",
                        "description": "Khi Lời Nói Dối Là Vũ Khí\r\n\r\nSẽ ra sao khi sự thật khách quan có sức ảnh hưởng kém hơn sự quyến rũ của cảm xúc và niềm tin cá nhân, trong việc định hình quan điểm của công chúng?\r\n\r\nSẽ ra sao khi ngôn ngữ mà chúng ta sử dụng đã bắt đầu làm cho mối liên hệ giữa sự thật và ảo tưởng trở nên không còn rõ ràng?\r\n\r\nSẽ ra sao khi người ta có thể biến những lời nói dối thành vũ khí, để những lời nói dối ấy càng có thể ngầm làm hao mòn năng lực đưa ra những quyết định đúng đắn cho chính chúng ta?\r\n\r\nTrong cuốn sách này, tác giả Daniel J. Levitin sẽ đưa ra những cách tư duy phản biện giúp chúng ta đánh giá các sự thật và định hình các kết luận dựa trên bằng chứng. Chúng ta sẽ ổn hơn nhiều khi biết được một lượng vừa phải những thứ chắc chắn, so với khi biết được rất nhiều thứ có thể không như vẻ ngoài của chúng. Tri thức chân chính sẽ đơn giản hóa cuộc sống của chúng ta, giúp chúng ta đưa ra các lựa chọn làm tăng hạnh phúc và tiết kiệm thời gian. Việc đi theo các bước tư duy phản biện trong cuốn sách này để đánh giá vô vàn tuyên bố mà chúng ta bắt gặp là cách để chúng ta có thể đi trước tới 2 bước so với hàng triệu lời nói dối ngoài kia trên Internet, và trước những kẻ dối trá và những kẻ có năng lực kém cỏi đưa ra những lời nói dối ấy.\r\n\r\nMã hàng\t8935235240650\r\nTên Nhà Cung Cấp\tNhã Nam\r\nTác giả\tDaniel J. Levitin\r\nNgười Dịch\tHoàng Đức Long\r\nNXB\tDân Trí\r\nNăm XB\t2024\r\nTrọng lượng (gr)\t500\r\nKích Thước Bao Bì\t24 x 15.5 x 1.6 cm\r\nSố trang\t332\r\nHình thức\tBìa Mềm\r\nSản phẩm bán chạy nhất\tTop 100 sản phẩm Kỹ năng sống bán chạy của tháng\r\nGiá sản phẩm trên Fahasa.com đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận chuyển, phụ phí hàng cồng kềnh,...\r\nChính sách khuyến mãi trên Fahasa.com không áp dụng cho Hệ thống Nhà sách Fahasa trên toàn quốc\r\nKhi Lời Nói Dối Là Vũ Khí\r\n\r\nSẽ ra sao khi sự thật khách quan có sức ảnh hưởng kém hơn sự quyến rũ của cảm xúc và niềm tin cá nhân, trong việc định hình quan điểm của công chúng?\r\n\r\nSẽ ra sao khi ngôn ngữ mà chúng ta sử dụng đã bắt đầu làm cho mối liên hệ giữa sự thật và ảo tưởng trở nên không còn rõ ràng?\r\n\r\nSẽ ra sao khi người ta có thể biến những lời nói dối thành vũ khí, để những lời nói dối ấy càng có thể ngầm làm hao mòn năng lực đưa ra những quyết định đúng đắn cho chính chúng ta?\r\n\r\nTrong cuốn sách này, tác giả Daniel Levitin sẽ đưa ra những cách tư duy phản biện giúp chúng ta đánh giá các sự thật và định hình các kết luận dựa trên bằng chứng. Chúng ta sẽ ổn hơn nhiều khi biết được một lượng vừa phải những thứ chắc chắn, so với khi biết được rất nhiều thứ có thể không như vẻ ngoài của chúng. Tri thức chân chính sẽ đơn giản hóa cuộc sống của chúng ta, giúp chúng ta đưa ra các lựa chọn làm tăng hạnh phúc và tiết kiệm thời gian. Việc đi theo các bước tư duy phản biện trong cuốn sách này để đánh giá vô vàn tuyên bố mà chúng ta bắt gặp là cách để chúng ta có thể đi trước tới 2 bước so với hàng triệu lời nói dối ngoài kia trên Internet, và trước những kẻ dối trá và những kẻ có năng lực kém cỏi đưa ra những lời nói dối ấy.",
                        "image": "https://cdn0.fahasa.com/media/catalog/product/8/9/8935235240650_1.jpg",
                        "category_id": 0,
                        "type_product": "Sách"
                    },
                    {
                        "product_id": "B00f43d99-3656-4291-a067-58839d89fb0f",
                        "name": "Nghệ Thuật Đọc Vị Bất Kỳ Ai",
                        "author": "Peter Paker",
                        "publisher": "Tuổi thơ",
                        "price": "10.00",
                        "description": "Nghệ Thuật Đọc Vị Bất Kỳ Ai - Biết Người Biết Ta - Trăm Trận Trăm Thắng\r\n\r\nBạn đang muốn đọc được những gì mọi người đang nghĩ về bạn? Muốn làm quen với người khác dễ dàng hơn? Muốn thuyết phục sếp tăng lương? Hay muốn có tầm ảnh hưởng đối với đội nhóm của mình? Cuốn sách này dành cho bạn!\r\n\r\nNghệ thuật Đọc vị bất kỳ ai chứa mọi bí quyết để trở thành một chuyên gia đọc vị. Với kiến thức sâu rộng về tâm lý học và ngôn ngữ học, tác giả Henrik Fexeus chia sẻ những kinh nghiệm thực tiễn và đôi khi dí dỏm, để thấu hiểu người khác dễ dàng, từ đó có thể tạo dựng ảnh hưởng cho bản thân trong cả cuộc sống lẫn công việc, với các chủ đề thú vị như:\r\n\r\nKhi nào người ta bằng mặt nhưng không bằng lòng\r\n\r\nKhi nào người ta đang “thả thính” một cách vô thức\r\n\r\nKhi nào người ta đang giả nhân giả nghĩa để dụ dỗ\r\n\r\nKhi nào người ta tìm cách thao túng cảm xúc của bạn\r\n\r\nKhi nào người ta cần giành giật sự chú ý của đám đông\r\n\r\nMã hàng\t9786043783209\r\nTên Nhà Cung Cấp\tCÔNG TY CỔ PHẦN VĂN HOÁ & CÔNG NGHỆ TUỆ TRI\r\nTác giả\tHenrik Fexeus\r\nNgười Dịch\tAnh Thư\r\nNXB\tDân Trí\r\nNăm XB\t2023\r\nTrọng lượng (gr)\t357\r\nKích Thước Bao Bì\t20 x 14.5 x 1.5 cm\r\nSố trang\t277\r\nHình thức\tBìa Mềm\r\nSản phẩm bán chạy nhất\tTop 100 sản phẩm Kỹ năng sống bán chạy của tháng\r\nGiá sản phẩm trên Fahasa.com đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận chuyển, phụ phí hàng cồng kềnh,...\r\nChính sách khuyến mãi trên Fahasa.com không áp dụng cho Hệ thống Nhà sách Fahasa trên toàn quốc\r\nNghệ Thuật Đọc Vị Bất Kỳ Ai - Biết Người Biết Ta - Trăm Trận Trăm Thắng\r\n\r\nBạn đang muốn đọc được những gì mọi người đang nghĩ về bạn? Muốn làm quen với người khác dễ dàng hơn? Muốn thuyết phục sếp tăng lương? Hay muốn có tầm ảnh hưởng đối với đội nhóm của mình? Cuốn sách này dành cho bạn!\r\n\r\nNghệ thuật Đọc vị bất kỳ ai chứa mọi bí quyết để trở thành một chuyên gia đọc vị. Với kiến thức sâu rộng về tâm lý học và ngôn ngữ học, tác giả Henrik Fexeus chia sẻ những kinh nghiệm thực tiễn và đôi khi dí dỏm, để thấu hiểu người khác dễ dàng, từ đó có thể tạo dựng ảnh hưởng cho bản thân trong cả cuộc sống lẫn công việc, với các chủ đề thú vị như:\r\n\r\nKhi nào người ta bằng mặt nhưng không bằng lòng\r\n\r\nKhi nào người ta đang “thả thính” một cách vô thức\r\n\r\nKhi nào người ta đang giả nhân giả nghĩa để dụ dỗ\r\n\r\nKhi nào người ta tìm cách thao túng cảm xúc của bạn\r\n\r\nKhi nào người ta cần giành giật sự chú ý của đám đông",
                        "image": "https://cdn0.fahasa.com/media/catalog/product/9/7/9786043783209.jpg",
                        "category_id": 0,
                        "type_product": "Sách"
                    }
                ]
            },
            {
                "category": {
                    "id": 1,
                    "name": "Điện thoại",
                    "type_product": "Phone"
                },
                "items": [
                    {
                        "product_id": "Mb545e1c0-3448-489e-aaab-448c8c02a34a",
                        "name": "Phone 15 Pro Max",
                        "price": "1499.00",
                        "description": "Màn hình:\r\n\r\nOLED6.7\"Super Retina XDR\r\nHệ điều hành:\r\n\r\niOS 17\r\nCamera sau:\r\n\r\nChính 48 MP & Phụ 12 MP, 12 MP\r\nCamera trước:\r\n\r\n12 MP\r\nChip:\r\n\r\nApple A17 Pro 6 nhân\r\nRAM:\r\n\r\n8 GB\r\nDung lượng lưu trữ:\r\n\r\n256 GB\r\nSIM:\r\n\r\n1 Nano SIM & 1 eSIMHỗ trợ 5G\r\nPin, Sạc:\r\n\r\n4422 mAh20 W\r\nHãng\r\n\r\niPhone (Apple). Xem thông tin hãng",
                        "image": "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-14-pro_2__5.png",
                        "category_id": 1,
                        "producer": "Apple",
                        "type": "128G",
                        "type_product": "Điện thoại"
                    },
                    {
                        "product_id": "Ma053bbde-4098-4102-a176-d915c9820e0b",
                        "name": "iPhone 15 Pro 128GB",
                        "price": "1499.00",
                        "description": "Máy mới 100% , chính hãng Apple Việt Nam.\r\nCellphoneS hiện là đại lý bán lẻ uỷ quyền iPhone chính hãng VN/A của Apple Việt Nam\r\nHộp, Sách hướng dẫn, Cây lấy sim, Cáp Type C\r\n1 ĐỔI 1 trong 30 ngày nếu có lỗi phần cứng nhà sản xuất. Bảo hành 12 tháng tại trung tâm bảo hành chính hãng Apple: CareS.vn(xem chi tiết)\r\nGiá sản phẩm đã bao gồm VAT",
                        "image": "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_4.png",
                        "category_id": 1,
                        "producer": "Apple",
                        "type": "128G",
                        "type_product": "Điện thoại"
                    },
                    {
                        "product_id": "M01272b85-563d-4a4a-9922-e40bf5eb5e7f",
                        "name": "iPhone 13 Pro Max 128GB",
                        "price": "1299.00",
                        "description": "Máy mới 100% , chính hãng Apple Việt Nam.\r\nCellphoneS hiện là đại lý bán lẻ uỷ quyền iPhone chính hãng VN/A của Apple Việt Nam\r\nHộp, Sách hướng dẫn, Cây lấy sim, Cáp Lightning - Type C\r\n1 ĐỔI 1 trong 30 ngày nếu có lỗi phần cứng nhà sản xuất. Bảo hành 12 tháng tại trung tâm bảo hành chính hãng Apple: CareS.vn(xem chi tiết)",
                        "image": "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-13-pro-max.png",
                        "category_id": 1,
                        "producer": "Xiaomi",
                        "type": "256G",
                        "type_product": "Điện thoại"
                    },
                    {
                        "product_id": "M04d429dc-b5ef-443b-a28a-9a26169c3836",
                        "name": "iPhone 15 Plus 128GB",
                        "price": "1590.00",
                        "description": "Hộp, Sách hướng dẫn, Cây lấy sim, Cáp Type C\r\n1 ĐỔI 1 trong 30 ngày nếu có lỗi phần cứng nhà sản xuất. Bảo hành 12 tháng tại trung tâm bảo hành chính hãng Apple: CareS.vn(xem chi tiết)\r\nGiá sản phẩm đã bao gồm VAT",
                        "image": "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1_.png",
                        "category_id": 1,
                        "producer": "Apple",
                        "type": "128G",
                        "type_product": "Điện thoại"
                    },
                    {
                        "product_id": "Md0fb9f0e-eff4-40a2-be0d-3dc9d9da20b3",
                        "name": "Xiaomii 14 Lite 12GB 512GB",
                        "price": "900.00",
                        "description": "Xiaomi 14 Lite 12GB 512GB được trang bị con chip Snapdragon 888 cùng GPU Adreno 660 để sở hữu tốc độ xử lý nhanh chóng cùng hiệu suất đồ hoạ ấn tượng. Thế hệ Xiaomi Lite mới còn được trang bị hệ thống camera chất lượng với 4 ống kính cùng nhiều tính năng để có thể lưu lại mọi khoảnh khắc của người dùng.\r\n\r\nXiaomi 14 Lite 12GB 512GB - Hiệu năng mạnh mẽ, camera chất lượng\r\nXiaomi 14 Lite 12GB 512GB, thế hệ điện thoại thuộc dòng Lite mới của Xiaomi sở hữu hiệu năng mạnh mẽ cùng khả năng xử lý đồ hoạ ấn tượng khi được trang bị bộ vi xử lý của Qualcomm. Xiaomi cũng không quên trang bị cho mẫu điện thoại tầm trung mới của mình hệ thống camera chất lượng cao để đáp ứng tốt cho nhu cầu quay, chụp của người dùng.\r\n\r\nSức mạnh tới từ Snapdragon 888\r\nXiaomi 14 Lite 12GB 512GB được trang bị bộ vi xử lý Snapdragon 888 của Qualcomm để có được hiệu năng mạnh mẽ. So với thế hệ chip Snapdragon 8 Series tiền nhiệm là Snapdragon 865, chip Snapdragon 888 sử dụng CPU Kryo 680 sở hữu hiệu suất lớn hơn 25% khi đạt tốc độ xử lý tối đa lên tới 2.84GHz.",
                        "image": "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/x/i/xiaomi-14-lite-8gb-256gb_1_1.png",
                        "category_id": 1,
                        "producer": "Apple",
                        "type": "128G",
                        "type_product": "Điện thoại"
                    },
                    {
                        "product_id": "M61528ae3-549b-4fc6-849c-08bd9a8f7aa8",
                        "name": "Xiaomi Redmi Note 13 6GB",
                        "price": "899.00",
                        "description": "Thông tin sản phẩm\r\n\r\nMới, đầy đủ phụ kiện từ nhà sản xuất\r\nMáy, sạc, Cáp USB Type-C, Dụng cụ lấy SIM, Vỏ bảo vệ, Hướng dẫn sử dụng nhanh\r\nBảo hành 18 tháng tại trung tâm bảo hành Chính hãng. 1 đổi 1 trong 30 ngày nếu có lỗi phần cứng từ nhà sản xuất. (xem chi tiết)\r\nGiá sản phẩm đã bao gồm VAT",
                        "image": "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/x/i/xiaomi-redmi-note-13_1__1_1.png",
                        "category_id": 1,
                        "producer": "Apple",
                        "type": "128G",
                        "type_product": "Điện thoại"
                    },
                    {
                        "product_id": "Mab0e5352-df79-4955-b6f0-ae78c3332a84",
                        "name": "Xiaomi 13T 12GB 256GB",
                        "price": "1200.00",
                        "description": "Xiaomi 13T đem tới trải nghiệm siêu mượt mà cho người dùng khi được trang bị chipset mạnh mẽ MediaTek Dimensity 8200-Ultra. Màn hình AMOLED thế hệ mới với tần số quét 144Hz giúp chất lượng hiển thị được sắc nét và chân thực trong từng điểm ảnh. Hệ thống quay chụp của máy cũng cực kỳ ấn tượng với cảm biến camera lên tới 50MP. Đồng thời, viên pin lên tới 5000mAh kết hợp với sạc nhanh 67W giúp nâng cao thời lượng sử dụng của người dùng.\r\n\r\nMua ngay Xiaomi 13T - Nhận nhiều ưu đãi hấp dẫn\r\nĐiện thoại Xiaomi 13T được hãng công nghệ Xiaomi giới thiệu cùng với Xiaomi 13T Pro đến người dùng vào cuối tháng 9 năm 2023. Hiện tại CellphoneS có bán điện thoại Xiaomi 13T với nhiều ưu đãi mua hàng hấp dẫn như:\r\n\r\n- Ưu thanh toán mở thẻ tín dụng, nhận voucher mua hàng từ 200.000 - 2.5 triệu đồng",
                        "image": "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/x/i/xiaomi-13t_1__1_2.png",
                        "category_id": 1,
                        "producer": "Xiaomi",
                        "type": "128G",
                        "type_product": "Điện thoại"
                    }
                ]
            },
            {
                "category": {
                    "id": 2,
                    "name": "Quần áo",
                    "type_product": "Clothes"
                },
                "items": [
                    {
                        "product_id": "C712d7c84-012b-4ac6-b5c7-88d9adcbcabe",
                        "name": "Quần Tây Lưng Gài Sợi Nhân Tạo",
                        "brand": "Unisex",
                        "color": "Xanh",
                        "size": "L",
                        "price": "199.00",
                        "description": "Chất liệu Poly Rayon Spandex\r\nThành phần: 82% Polyester 14% Rayon 4% Spandex\r\n- Co giãn tốt\r\n- Kháng khuẩn\r\n- Mềm mịn\r\n- Ít nhăn\r\n- Độ bền màu tương đối tốt",
                        "image": "https://cdn2.yame.vn/pimg/quan-tay-wrinkle-free-19-0022489/4f37eb66-b42e-9700-098d-001ad35b4251.jpg?w=540&h=756",
                        "category_id": 2,
                        "type_product": "Quần áo"
                    },
                    {
                        "product_id": "C6c7c3b4d-492d-4c3b-899a-b472f22d3688",
                        "name": "ÁO KHOÁC NAM TORKLD",
                        "brand": "Unisex",
                        "color": "Xanh",
                        "size": "L",
                        "price": "149.00",
                        "description": "Dịch vụ: thanh toán khi nhận hàng, đổi size nếu không vừa, xem hàng trước khi nhận.\r\n\r\nLưu ý:\r\nSản phẩm váy, áo, quần cắt may có thể chênh lệch 1 – 2 (cm).\r\nDo ánh sáng và thiết bị chụp hình, màu sắc hình ảnh và thực tế có thể có chênh lệch nhỏ.",
                        "image": "https://cbu01.alicdn.com/img/ibank/O1CN01C9LOjr1GQAg6XUIf4_!!4258180616-0-cib.jpg",
                        "category_id": 2,
                        "type_product": "Quần áo"
                    },
                    {
                        "product_id": "Cc38e31e1-04f8-4a35-8e4a-eb9ffabd539c",
                        "name": "Áo Polo nam Excool",
                        "brand": "Unisex",
                        "color": "Xanh",
                        "size": "L",
                        "price": "159.00",
                        "description": "Đặc điểm nổi bật\r\nChất liệu: 56% Polyester PET + 44% Polyester PTT Sorona\r\nPhù hợp với: đi làm, đi chơi, mặc ở nhà\r\nSản xuất trực tiếp tại Quận 12, Hồ Chí Minh, Việt Nam\r\nNgười mẫu: 1m77 - 74kg; mặc áo size XL\r\nTự hào sản xuất tại Việt Nam",
                        "image": "https://media2.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/May2024/apl.ex.reu5.jpg",
                        "category_id": 2,
                        "type_product": "Quần áo"
                    },
                    {
                        "product_id": "C6e8cc717-2709-4436-82ce-1ac287ea50f1",
                        "name": "Quần Âu Nam Ống Đứng",
                        "brand": "Unisex",
                        "color": "Xanh",
                        "size": "L",
                        "price": "199.00",
                        "description": "Chất liệu vải Nano\r\n\r\nVải sử dụng công nghệ Nano xoắn nhiều sợi li ti thành một sợi.\r\n\r\nNano thuộc nhóm vải công nghệ mới,là bước đột phá trong ngành vải sợi thế giới\r\n\r\nVải dệt đôi 2 mặt là kiểu dệt khá phức tạp giúp định hình form dáng sản phẩm\r\n\r\nCấu trúc dệt khác biệt, giúp tạo cảm giác thoải mái. \r\n\r\nYODY - Look good. Feel good\r\n\r\n \r\n\r\nSản xuất tại Việt Nam",
                        "image": "https://bizweb.dktcdn.net/100/438/408/products/qam3190-den-2-13d6b9fa-0720-4d08-bc1a-0d0b9ed99c60.jpg?v=1690163853650",
                        "category_id": 2,
                        "type_product": "Quần áo"
                    },
                    {
                        "product_id": "Cf0c9ef3c-3e11-499a-963a-d1f3896d068c",
                        "name": "Áo Khoác Nam có mũ",
                        "brand": "Unisex",
                        "color": "Xanh",
                        "size": "L",
                        "price": "180.00",
                        "description": "Đặc điểm nổi bật\r\nChất liệu áo khoác nam có mũ Daily Wear: 100% Polyester\r\nCông nghệ ứng dụng: HeiQ Viro Block\r\nPhù hợp với: khoác ngoài chống nắng, tránh gió\r\nKiểu dáng: nhỏ gọn, dễ mặc\r\nTự hào sản xuất tại Việt Nam\r\nNgười mẫu: 182 cm - 76 kg, mặc áo 2XL",
                        "image": "https://media2.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/October2023/ao-khoac-mu-daily-wear-xam-6_48.jpg",
                        "category_id": 2,
                        "type_product": "Quần áo"
                    },
                    {
                        "product_id": "C3c5cd0df-4f00-4be4-b6fc-caf86b2b0785",
                        "name": "Áo Jean Nam Nữ form rộng",
                        "brand": "Unisex",
                        "color": "Xanh",
                        "size": "L",
                        "price": "150.00",
                        "description": "Áo khoác Denim Nam Nữ form rộng thời trang đường phố.\r\nThiết kế trẻ trung dễ phối đồ.\r\nKiểu dáng áo khoác jean sơ mi form rộng.\r\nThích hợp dạo phố, du lịch, đi chơi, đi học,...\r\nChi tiết Áo khoác Nam Nữ Jean màu xanh dương:\r\nChất liệu: Vải Jean - Denim.\r\nSize: M, L, XL, 2XL, 3XL, 4XL.\r\nVải dày dặn, mềm mại, 1 lớp.\r\nThoáng khí, thấm hút mồ hôi.\r\nGiữ form sau khi giặt & không bị nhăn hay phai màu.",
                        "image": "https://zizoou.com/cdn/shop/products/Ao-khoac-Jean-somi-form-rong-xanh-2-2-ZiZoou-Store.jpg?v=1676538411",
                        "category_id": 2,
                        "type_product": "Quần áo"
                    }
                ]
            }
        ]
        );
    }, [])

    const handleClickDetail = (product_id) => {
        navi(`/product/${product_id}`)
    }

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('search')
        setLoading(true)
        axios.get(api_endpoint.apiSearchByName + key)
            .then(data => {
                if (data['category_items'] !== undefined) {
                    setProducts(data['category_items'])
                    setLoading(false)
                }
            })
            .catch(error => console.error('There was a problem with your fetch operation:', error));
    }
    return (
        <div className="component-home-container">
            <Nav />
            <div class="search-container">
                <form id="form-search">
                    <div class="container-input">
                        <input type="text" placeholder="Tìm kiếm..." name="search" id="search-input" onChange={(e) => setKey(e.target.value)} />
                        <img
                            id="preview-image"
                            src={avt}
                            alt="Ảnh Sản Phẩm"
                            style={{ width: '80px', display: 'none' }}
                            name="image"
                        />
                    </div>
                    <button type='button' id="voiceSearchBtn" ><i class="fa-solid fa-microphone"></i></button>
                    <button type="submit" loading={loading} onClick={handleSearch}>Tìm</button>
                </form>
            </div>
            {true ? (
                <div>
                    {products.map(product => (
                        <HomeItem product={product} />
                    ))}
                </div>
            ) : (
                <Spin tip="Loading" size="large" fullscreen />
            )}
        </div>
    );
}

export default Home;