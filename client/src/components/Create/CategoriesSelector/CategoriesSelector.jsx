import UnitCategorySelector from "./UnitCategorySelector/UnitCategorySelector";

export default function CategoriesSelector({createdNft, setCreatedNft}){
    
    
    return(
        <>
            <div className="inputContainer">
                <h5>Category</h5>
                <p>
                    Classify your nft from the following categories. You must select
                    all of them or you will not be able to create the nft
                </p>
                <UnitCategorySelector
                    index={0}
                    categoryName={"Specie"}
                    categoryType={"species"}
                    createdNft={createdNft}
                    setCreatedNft={setCreatedNft}
                />
                <UnitCategorySelector
                    index={1}
                    categoryName={"Subspecie"}
                    categoryType={"species2"}
                    createdNft={createdNft}
                    setCreatedNft={setCreatedNft}
                />
                <UnitCategorySelector
                    index={2}
                    categoryName={"Art"}
                    categoryType={"art"}
                    createdNft={createdNft}
                    setCreatedNft={setCreatedNft}
                />
                <UnitCategorySelector
                    index={3}
                    categoryName={"Type"}
                    categoryType={"type"}
                    createdNft={createdNft}
                    setCreatedNft={setCreatedNft}
                />
                <UnitCategorySelector
                    index={4}
                    categoryName={"Style"}
                    categoryType={"style"}
                    createdNft={createdNft}
                    setCreatedNft={setCreatedNft}
                />
                <UnitCategorySelector
                    index={5}
                    categoryName={"Restriction"}
                    categoryType={"rest"}
                    createdNft={createdNft}
                    setCreatedNft={setCreatedNft}
                />
                <UnitCategorySelector
                    index={6}
                    categoryName={"Background"}
                    categoryType={"flat"}
                    createdNft={createdNft}
                    setCreatedNft={setCreatedNft}
                />
            </div>
        </>
    )
}