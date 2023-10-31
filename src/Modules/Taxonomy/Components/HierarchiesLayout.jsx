const HierarchiesLayout = ({
    data,
    entityType,
}) => {

    return <div class="heirarchies">
        {
            heirarchies?.map(heirarchy => <div class="heirarchies">
                {heirarchy.name}
            </div>)
        }
    </div>
}

export default HierarchiesLayout
