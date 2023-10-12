
const ItemDetailsContainer = ({ params }: { params: { id: string } }) => {

    return (
        <p>product: {params.id}</p>
    )

}

export default ItemDetailsContainer