import React from "react";
import "./CommonBlog.css"
import AnimatedButton from "../ButtonComp/AnimationButton"
import BlogArtical from "./BlogArticals/BlogArtical"
import { Link } from 'react-router-dom';

const PlanogramCompliance = () => {
    return (
        <div>
            <div className="Blogpage-cointainer">
                <div className='mainContainer'>
                    <div className="content-Blog">
                        <div className="Blog-left-column">
                            <div className="blog-breadcrumb">
                                <Link to="/">Home</Link> {' > '}
                                <Link to="/BlogHubPage">Blogs</Link>  {' > '}
                                <Link style={{ color: "grey", cursor: "default" }}>Accurate Planogram Compliance</Link>

                            </div>
                            <h2>How Smart Shelf Monitoring Ensures Accurate Planogram Compliance</h2>
                            <p>By Ranjith Kumar, July 16, 2024</p>

                            <div className="blogborder-box">
                              <p>According to the statistical reports, POG compliance in the retail industry is less than 70%. The primary reason for breaking POGs or not following them in the first place accounts for the lack of a proper monitoring system in place. </p>
                              <p>Lack of planogram compliance can lead to a decrease in sales as customers will find it harder to find the products they are looking for. This can also interfere with the flow of e-commerce picking, leading to overall inefficiency. Not complying with POGs also prompts CPG companies to cut down on their trade spent for shares on the shelf, which can lead to lower margins in sales for retailers. </p>
                              <p>To ensure proper POG execution in stores, a feasible monitoring technology such as a smart shelf monitoring camera can be used. In this blog, we will look into how smart shelf monitoring cameras make planogram compliance easy to implement and maintain while also helping decrease labor and time spent.</p>
                              <h3>Technical Overview </h3>
                              <p>Here's a detailed look into how shelf monitoring cameras work for planogram compliance and make way for a better product placement strategy. </p>
                              <h3>1. High-Resolution Imaging for Comprehensive Coverage</h3>
                              <p>Shelf monitoring cameras are equipped with high-resolution sensors that capture detailed images of retail shelves. These cameras are strategically placed to cover entire aisles or specific sections, ensuring comprehensive shelf coverage. The high resolution helps in accurately detecting small visual differences in product labels, packaging, and shelf placement.</p>
                              <p>Camera features for enhanced shelf monitoring performance:  </p>
                              <ul>
                                <li><p><b>Multi-Lens or Panoramic Cameras for Wider FOV : </b>Some monitoring cameras use multi-lens configurations or panoramic designs to provide a wide field of view. This ensures that they can capture images from multiple angles, reducing blind spots and increasing accuracy.</p></li>
                                <li><p><b>Dynamic Range and Low-Light Performance :</b> Cameras with high dynamic range (HDR) capabilities and excellent low-light performance ensure image quality remains consistent across varying lighting conditions in the store, which is a common challenge in retail environments.</p></li>
                              </ul>
                              <h3>2. AI-Based Image Processing and Computer Vision Algorithms</h3>
                              <p>The images captured by shelf monitoring cameras are analyzed using AI/ML based image processing algorithms. These algorithms are trained to recognize product shapes, packaging, barcodes, and also minute details such as specific product colors and textures. It can ensure planogram compliance by easily differentiating between similar-looking products and also identifying misplaced products.</p>
                              <p>Common algorithms and techniques used in AI based shelf monitoring cameras are given below: </p>
                              <ul>
                                <li><p><b>Object Detection and Recognition :</b>The AI models use object detection techniques such as YOLO (You Only Look Once) or Faster R-CNN (Region-based Convolutional Neural Networks) to identify each product on the shelf. These models are trained on large datasets of product images, allowing them to differentiate even minute differences between product variants.</p></li>
                                <li><p><b>Shelf Segmentation :</b>Semantic segmentation is a method that divides the captured images into different segments, such as product regions, empty spaces, and shelf edges. This enables the camera to understand where exactly each product is located on the shelf and helps detect any deviation from the planogram.</p></li>
                                <li><p><b>Barcode and Label Recognition :</b>Shelf monitoring cameras are capable of reading barcodes, QR codes, or other product labels. By cross-checking these labels with the planogram database, the system can confirm whether the correct products are placed in the designated areas.</p></li>
                              </ul>
                              <h3>3. Integration with Planogram Databases</h3>
                              <p>To perform planogram compliance checks, the shelf monitoring camera system needs to have access to a digital version of the planogram. This planogram database will contain information such as product SKU, placement details, shelf heights, and display configurations. After the camera captures the images and analyzes them using ML algorithms, the results are compared against the planogram data.</p>
                              <p>The camera system maps the captured shelf image to the corresponding digital planogram, aligning products with their respective positions in the planogram. This alignment process can handle various challenges, such as misplaced products and alignment of the products on the shelf.  </p>
                              <p>If the system detects a mismatch—such as missing products, misplaced items, or incorrect facing—alerts are sent, highlighting the exact location and nature of the deviation.</p>
                              <h3>4. Real-Time Compliance Alerts and Notifications</h3>
                              <p>When a deviation from the planogram is detected, the shelf monitoring system can send real-time alerts and notifications to store managers or staff through a centralized dashboard or mobile app. This feature helps to take quick corrective action, preventing non-compliance during the retail working hours that could affect sales.</p>
                              <h3>5. Machine Learning for Continuous Improvement</h3>
                              <p>The AI models used in shelf monitoring cameras are on a constant learning loop. They learn and improve over time through machine learning techniques. By continually analyzing new data, these systems become better at recognizing new products, handling complex shelf arrangements, and adapting to changes in store layouts.</p>
                              <p>Some advanced systems use reinforcement learning algorithms, which enable the AI models to self-correct based on feedback from human interventions. For example, if a staff member overrides an alert, the system learns to adjust it for similar scenarios in the future.</p>
                              <h3>6. Edge Computing for On-Device Processing</h3>
                              <p>To ensure real-time analysis and reduce latency, many shelf monitoring cameras are equipped with edge computing capabilities. Edge devices, such as NVIDIA Jetson modules, process image data directly on the camera or on a local device, reducing the need to send large amounts of data to the cloud for analysis.</p>
                              <p>Edge computing allows for quick decision-making and compliance checks directly at the store level. This is beneficial for high-traffic stores where immediate actions are required. This enables low-latency and real-time analysis.</p>
                              <p>By performing computations locally, shelf monitoring cameras minimize the need for high-bandwidth connections and large storage solutions, making the overall system more scalable and cost-effective. </p>
                              <h3>Integration with Retail Management Systems</h3>
                              <p>Shelf monitoring cameras are built with the ability to integrate with existing retail management systems, such as inventory management and store analytics platforms. This integration allows the compliance data from the cameras to be used in broader decision-making processes, such as optimizing product placement strategies or planning inventory replenishment.</p>
                              <p>The cameras can share compliance reports, alerts, and other insights through APIs, enabling seamless data exchange and collaboration between the compliance system and other retail management tools.</p>
                              <h3>Why Choose e-con Systems Shelf-Snap/Shelf-Track for Your Retail Store Shelf Monitoring Needs? </h3>
                              <p>e-con Systems has 20+ years of experience in designing, developing, and manufacturing OEM cameras. We have now ventured into providing camera solutions for shelf-monitoring – for retail displays in environments such as retail stores, warehouses, and distribution centers. </p>
                              <p>Our 13 MP Shelf-Snap camera is integrated with a high-resolution sensor from [insert sensor name & company]. It is curated to monitor shelf stock and product organization, providing critical data for restocking and inventory management decisions. </p>
                              <p>Shelf-snap cameras can be connected to external backend systems via Wi-Fi (2.5 GHz to 5 GHz), allowing businesses to manage storage and analysis independently. This GPDR- compliant camera comes with a rechargeable battery, custom enclosures, and mounting options and can be configured for both Android and iOS.</p>
                                <p>Explore <a href="">Shelf-Snap</a>.</p>


                            </div>
                        </div>
                        <div className="Blog-right-column">
                            <div className="Blogrelated-articles">
                                <p style={{ "font-weight": "bold" }}>Related Blogs</p>
                                <hr />
                                <div className="CardBlogs" style={{ cursor: "pointer" }}>
                                    <Link className="cardImgLink" to="/RetailExperience" style={{ textDecoration: "none" }}>
                                        <img src="https://placehold.jp/251x151.png" alt="Camera Model 1" className="Cardrelated-image" /></Link>
                                    <Link className="cardTitleLink" to="/RetailExperience" style={{ textDecoration: "none" }}>
                                        <h2>How vision-based shelf monitoring helps retailers</h2></Link>
                                        <p>The shelves in retail stores are packed with thousands of unique Consumer Packaged Goods (CPG). Retail store owners must keep track of out-of-stock and on-shelf availability of goods, price compliance, etc. In this blog, we explore how shelf-monitoring cameras can be used to perform these retail operations.</p>
                                        <AnimatedButton className="Blogreadmore-1" text="Read more" to='/RetailExperience' />
                                </div>
                                <div className="CardBlogs">
                                    <Link className="cardImgLink" to="/ShelfDigitalization" style={{ textDecoration: "none" }}>
                                        <img src="https://placehold.jp/251x151.png" alt="Camera Model 2" className="Cardrelated-image" /></Link>
                                    <Link className="cardTitleLink" to="/ShelfDigitalization" style={{ textDecoration: "none" }}>
                                        <h2>What are the Latest Shelf Digitalization Technologies For Retailers?</h2></Link>
                                        <p>Explore various shelf digitalization technologies, their unique benefits, implementation challenges, and how they're transforming traditional retail operations. Get expert insights on choosing the right technology for your needs.</p>
                                        <AnimatedButton className="Blogreadmore-1" text="Read more"  to="/ShelfDigitalization"></AnimatedButton>
                                </div>
                                <div className="CardBlogs">
                                    <Link className="cardImgLink" to="" style={{ textDecoration: "none" }}>
                                        <img src="https://placehold.jp/251x151.png" alt="Camera Model 3" className="Cardrelated-image" /></Link>
                                    <Link className="cardTitleLink" to="" style={{ textDecoration: "none" }}>
                                        <h2>How Shelf Monitoring Cameras Tackle the Retail Out-of-Stock Problem</h2>
                                    </Link>
                                    <p>Tracking the availability of store products and knowing when products go out-of-stock is critical in retail. On-shelf availability (OSA) is a metric that measures if products are available on display, and Out-of-Stock (OOS) is used to measure when items are not available on the shelves. In this blog, we discuss how shelf monitoring cameras can be used to track OSA and OOS and the key camera features required for it.</p>
                                    <AnimatedButton className="Blogreadmore-1" text="Read more"  to=""></AnimatedButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div><BlogArtical /></div>
        </div>
    );
};

export default PlanogramCompliance;