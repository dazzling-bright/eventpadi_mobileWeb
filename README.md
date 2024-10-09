https://v2.chakra-ui.com/
https://react-icons.github.io/react-icons/

<!--useful component -->

#search
<InputGroup>
<InputLeftElement pointerEvents="none">
<CiSearch color="gray.300" size={20} />
</InputLeftElement>
<Input
type="text"
placeholder="Search..."
width={"25rem"}
borderWidth={1}
borderColor={"borderColor"}
focusBorderColor="borderColor"
onChange={handleInputChange}
ref={dropdownRef}
/>
</InputGroup>

<!-- #button -->

<Button
leftIcon={<FiPlus />}
bg={"#FF9C2A"}
variant="solid"
color={"white"}
mb={2}
as={"button"}
borderWidth={"1px"}
\_hover={{
            backgroundColor: "white",
            color: "#0D2755",
            borderColor: "#FF9C2A",
          }}
onClick={onOpen} >
Add Exhibitors
</Button>

<!-- button -->

<Button
color="#0D2755"
borderColor="#FF9C2A"
fontWeight="semibold"
variant="outline"
_hover={{
                      backgroundColor: "#FF9C2A",
                      color: "white",
                    }}
onClick={onOpenEventStatus} >
Unpublish
</Button>

<!-- icons -->

<Box
as="button"
borderRadius="50%"
background="#EBF2FF"
boxSize="50px"
display="flex"
alignItems="center"
justifyContent="center"
boxShadow="13px 13px 26px #dde3f0, -13px -13px 26px #f9ffff"
cursor="pointer"

> <Icon as={IoArrowBackOutline} boxSize={5} />
> </Box>
