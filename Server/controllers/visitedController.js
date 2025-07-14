import { addValuesInTable, getAllFromTable } from "../sql/sqlCommand.js";

export const addCountry = async (req, res) => {
  const { country_name } = req.body;
  const user_id = req.session.user.id;
  try {
    const country = await getAllFromTable(
      "countries",
      "country_name",
      country_name,
      false
    );
    if (country?.length) {
      const user = await getAllFromTable("users", "id", user_id);
      if (user?.length) {
        const visited_countries = await addValuesInTable({
          table: "visited_countries",
          data: {
            user_id: user_id,
            country_code: country[0].country_code,
          },
        });
        return res.status(201).json({ message: "Country added successfully!" });
      } else {
        return res.status(401).json({ message: "User not Found!" });
      }
    }
    return res.status(401).json({ message: "Country not found!" });
  } catch (error) {
    if (error.code == "23505")
      return res
        .status(409)
        .json({ message: "You have already marked this country as visited." });
    return res.status(500).json({ message: error.message });
  }
};

export const getCountriesList = async (req, res) => {
  const userId = req.session.user.id;
  console.log("user", userId);

  try {
    const user = await getAllFromTable("users", "id", userId);

    if (!user?.length) {
      return res.status(404).json({ message: "User not found!" });
    }

    const countryList = await getAllFromTable(
      "visited_countries",
      "user_id",
      userId
    );

    return res.status(200).json({
      message: "Visited countries fetched successfully",
      user_id: userId,
      countries: countryList.map((c) => c.country_code),
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};
