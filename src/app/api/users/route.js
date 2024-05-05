import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
connectDb();

export async function GET(request) {
  try {
      const users = await User.find(); // Assuming User.find() returns all users
      return NextResponse.json(users, { status: 200 });
  } catch (error) {
      console.error(error);
      return NextResponse.json(
          {
              message: "Failed to fetch users",
              status: false,
          },
          {
              status: 500,
          }
      );
  }
}

export async function PUT(request) {
    try {
        const { id, about } = await request.json(); // Assuming you're passing user ID and about in the request body
        const updatedUser = await User.findByIdAndUpdate(id, { about }, { new: true }); // Update the user with the provided ID and about field
        return NextResponse.json(updatedUser, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                message: "Failed to update user",
                status: false,
            },
            {
                status: 500,
            }
        );
    }
}

export async function POST(request) {
    // fetch user detail from  request
  
    const { about } = await request.json();
  
    console.log({ about });
  
    // create user object with user model
  
    const user = new User({
     
      about
    });
    try {
       
        const createdUser = await user.save();
        const response = NextResponse.json(user, {
          status: 201,
        });
        return response;
      } catch (error) {
        console.log(error);
        return NextResponse.json(
          {
            message: "failed to create user !!",
            status: false,
          },
          {
            status: 500,
          }
        );
      }
}