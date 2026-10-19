function Panel({children,judul}) {
return (
<div className="judul">
    {judul && <h3>{judul}</h3>}
    {children}
</div>
)
}