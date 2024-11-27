package com.example.backend.model;

import com.example.backend.model.User;
import jakarta.persistence.*;

@Entity
@Table(name = "attendance")
public class Attendance {
    public int getId() {
        return id;
    }

    public int getCount() {
        return count;
    }

    public String getSemester() {
        return semester;
    }

    public User getUser() {
        return user;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public void setSemester(String semester) {
        this.semester = semester;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int count;
    private String semester;
    @ManyToOne
    private User user;

}