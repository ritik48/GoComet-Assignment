import { useEffect, useState } from "react";
import styles from "./AddPeopleform.module.css";
import { RxCross1 } from "react-icons/rx";
import { useBooking } from "../hooks/useBooking";

type InputGroup = {
  id: number;
  name: string;
  age: string;
  gender: string;
};

export function AddPeopleForm() {
  const { totalPeople, setTotalPeople } = useBooking(); // Access `setTotalPeople` from the context
  const [inputGroups, setInputGroups] = useState<InputGroup[]>([]);

  useEffect(() => {
    // Create initial input groups based on totalPeople
    const initialGroups: InputGroup[] = Array.from(
      { length: totalPeople },
      () => ({
        id: Date.now() + Math.random(), // Ensure unique IDs
        name: "",
        age: "",
        gender: "",
      })
    );

    setInputGroups(initialGroups);
  }, []);

  const handleAddGroup = () => {
    const newGroup: InputGroup = {
      id: Date.now(),
      name: "",
      age: "",
      gender: "",
    };
    setInputGroups((prev) => [...prev, newGroup]);
    setTotalPeople((prev) => prev + 1); // Increment totalPeople
  };

  const handleRemoveGroup = (id: number) => {
    setInputGroups((prev) => prev.filter((group) => group.id !== id));
    setTotalPeople((prev) => Math.max(prev - 1, 0)); // Decrement totalPeople but not below 0
  };

  const handleChange = (id: number, field: keyof InputGroup, value: string) => {
    setInputGroups((prev) =>
      prev.map((group) =>
        group.id === id ? { ...group, [field]: value } : group
      )
    );
  };

  function bookHotel() {
    console.log("Booked");
    console.log({ inputGroups });
  }

  return (
    <div className={styles.container}>
      <div className={styles.people_container}>
        {inputGroups.map((group, index) => (
          <div key={group.id} className={`${styles.content}`}>
            <div className={`${styles.remove} flex`}>
              <div>Person {index + 1}</div>
              <RxCross1
                size={14}
                className={styles.remove_icon}
                onClick={() => handleRemoveGroup(group.id)}
              />
            </div>
            <div className={`${styles.input_group} flex flex-col`}>
              <input
                type="text"
                placeholder="Name"
                value={group.name}
                onChange={(e) => handleChange(group.id, "name", e.target.value)}
                className={styles.input}
              />
              <div className={`flex items-center ${styles.bottom}`}>
                <input
                  type="number"
                  placeholder="Age"
                  value={group.age}
                  onChange={(e) =>
                    handleChange(group.id, "age", e.target.value)
                  }
                  className={styles.input_age}
                />
                <div className={`${styles.gender_buttons} flex items-center`}>
                  <button
                    className={`${styles.gender_button} ${
                      group.gender === "male" ? styles.active : ""
                    }`}
                    onClick={() => handleChange(group.id, "gender", "male")}
                  >
                    Male
                  </button>
                  <button
                    className={`${styles.gender_button} ${
                      group.gender === "female" ? styles.active : ""
                    }`}
                    onClick={() => handleChange(group.id, "gender", "female")}
                  >
                    Female
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button onClick={handleAddGroup} className={styles.add_button}>
        + ADD PERSON
      </button>
      <button onClick={bookHotel} className={`btn primary`}>
        Book
      </button>
    </div>
  );
}
