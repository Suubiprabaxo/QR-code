import "./App.css";
import QRCode from "react-qr-code";
import QRCodeLink from "qrcode";
import { useState } from "react";

function App() {
  const [link, setLink] = useState("");
  const [qrcodeLink, setQrcodeLink] = useState("");

  function handleGenerate(link_url) {
    QRCodeLink.toDataURL(
      link_url,
      {
        width: 600,
        margin: 3,
      },
      function (error, url) {
        setQrcodeLink(url);
      }
    );
  }

  function handleQrcode(event) {
    setLink(event.target.value);
    handleGenerate(event.target.value);
  }

  return (
    <div className="container">
      <div class="text">
          <h1>Gerador de QR code</h1>
          <h1>Gerador de QR code</h1>
        </div>

      <QRCode value={link} />
      <input
        className="input"
        placeholder="Digite seu link"
        value={link}
        onChange={(event) => handleQrcode(event)}
      />

      <a className="botao" href={qrcodeLink} download={`QRcode.png`}>
        Baixar QR code
      </a>
    </div>
  );
}

export default App;
