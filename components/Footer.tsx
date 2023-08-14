import Link from "next/link";

export default function Footer() {
    return (
        <footer style={{display: "flex", alignItems: "center", justifyContent: "space-between", marginTop:"20px", marginBottom: "10px", paddingLeft:"20px", paddingRight:"20px", fontSize: "18px", color: "rgb(148, 163, 184)"}}>
            <div>
                <a
                    href="/zhifu.png"
                    target="_blank"
                    rel="noreferrer"
                >
                    <b>
                    Hãy hỗ trợ tôi bằng 1 cốc coffe
                    </b>
                </a>
            </div>
            <div>
                Đây là {" "}
                <a
                    href="/zfb1.png"
                    target="_blank"
                    rel="noreferrer"
                >
                    <b>
                    Momo{" "}
                    </b>
                </a>
                và{" "}
                <a
                    href="/wechat.jpg"
                    target="_blank"
                    rel="noreferrer"
                >
                    <b>
                    Zalo của tôi. Thanks
                    </b>
                </a>
            </div>
        </footer>
    )
}