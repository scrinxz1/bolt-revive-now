import { useEffect } from "react";

const GoogleAd = () => {
  useEffect(() => {
    const handleSitelinkClick = (e: Event) => {
      const btn = e.currentTarget as HTMLElement;
      const targetId = btn.getAttribute('data-target');
      
      document.querySelectorAll('.g-ad__panel').forEach(p => {
        (p as HTMLElement).style.display = 'none';
      });
      
      if (targetId) {
        const panel = document.querySelector(targetId);
        if (panel) {
          (panel as HTMLElement).style.display = 'block';
        }
      }
    };

    const buttons = document.querySelectorAll('.g-ad__sitelink');
    buttons.forEach(btn => {
      btn.addEventListener('click', handleSitelinkClick);
    });

    return () => {
      buttons.forEach(btn => {
        btn.removeEventListener('click', handleSitelinkClick);
      });
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .g-ad{font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;max-width:720px;margin:20px auto;padding:16px 16px 20px;border:1px solid #e5e7eb;border-radius:12px;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.04)}
        .g-ad__badge{font-size:12px;color:#6b7280;margin-bottom:8px}
        .g-ad__header{display:flex;gap:10px;align-items:center}
        .g-ad__favicon{width:20px;height:20px;border-radius:4px;flex:0 0 auto}
        .g-ad__domain{display:block;font-size:12px;color:#16a34a;text-decoration:none;margin-bottom:2px}
        .g-ad__title{font-size:18px;margin:0}
        .g-ad__title a{color:#1d4ed8;text-decoration:none}
        .g-ad__title a:hover{text-decoration:underline}
        .g-ad__headline{display:inline-block;margin-top:10px;color:#1d4ed8;text-decoration:none;font-weight:600}
        .g-ad__headline:hover{text-decoration:underline}
        .g-ad__desc{margin:6px 0 10px;color:#374151;font-size:14px;line-height:1.4}
        .g-ad__sitelinks{display:grid;grid-template-columns:1fr;gap:8px;margin:10px 0}
        .g-ad__sitelink{border:1px solid #e5e7eb;border-radius:10px;background:#f9fafb;padding:12px 14px;text-align:left;font-size:15px;cursor:pointer}
        .g-ad__sitelink:hover{background:#f3f4f6}
        .g-ad__panel{display:none;padding:10px 12px;border-left:3px solid #1d4ed8;background:#f8fafc;border-radius:8px;margin-bottom:8px;color:#374151}
        .g-ad__call{display:flex;align-items:center;gap:8px;margin-top:8px;padding:12px 14px;background:#0ea5e9;color:#fff;border-radius:10px;text-decoration:none;font-weight:600;justify-content:center}
        .g-ad__call:hover{filter:brightness(.95)}
        .g-ad__phone-ico{font-size:18px}
        @media (min-width:640px){
          .g-ad__sitelinks{grid-template-columns:repeat(3,1fr)}
        }
      `}} />

      <section className="g-ad">
        <div className="g-ad__badge">Sponsorisé</div>

        <header className="g-ad__header">
          <img className="g-ad__favicon" src="https://www.google.com/s2/favicons?domain=hygipronuisibles.fr" alt="" />
          <div className="g-ad__title-wrap">
            <a className="g-ad__domain" href="https://www.hygipronuisibles.fr">https://www.hygipronuisibles.fr</a>
            <h1 className="g-ad__title">
              <a href="https://www.hygipronuisibles.fr">Office Anti Nuisibles</a>
            </h1>
          </div>
        </header>

        <a className="g-ad__headline" href="https://www.hygipronuisibles.fr">
          Intervention dès aujourd'hui
        </a>

        <p className="g-ad__desc">
          Sans rendez-vous — Envie d'en finir avec les rats et les nuisibles ? Faites appel à un expert pour un diagnostic offert.
        </p>

        <nav className="g-ad__sitelinks">
          <button className="g-ad__sitelink" data-target="#sl1">DEVIS 100% GRATUIT</button>
          <button className="g-ad__sitelink" data-target="#sl2">INTERVENTION PERPIGNAN</button>
          <button className="g-ad__sitelink" data-target="#sl3">DEVIS POUR RATS ET NUISIBLES</button>
        </nav>

        <div className="g-ad__panels">
          <div id="sl1" className="g-ad__panel">
            <p>Diagnostic et devis gratuits sur place. Tarifs clairs, sans surprise.</p>
          </div>
          <div id="sl2" className="g-ad__panel">
            <p>Experts proches de chez vous. Intervention rapide à Perpignan et alentours.</p>
          </div>
          <div id="sl3" className="g-ad__panel">
            <p>Solution efficace contre rats et nuisibles, par des techniciens certifiés.</p>
          </div>
        </div>

        <a className="g-ad__call" href="tel:+33650298547" aria-label="Appeler">
          <span className="g-ad__phone-ico">📞</span>
          Appeler le 06 50 29 85 47
        </a>
      </section>
    </>
  );
};

export default GoogleAd;
