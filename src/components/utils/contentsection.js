function ContentSection({ title, tooltip, children }) {
    const formattedTooltip = tooltip.split(":n").join("<br />");
    return (
      <div className="section-container">
        <h2 className="section-title">{title}</h2>
        <div className="section-content">{children}</div>
        <span
            className="tooltip"
            dangerouslySetInnerHTML={{ __html: formattedTooltip }}>
        </span>
      </div>
    );
}
  

export default ContentSection;