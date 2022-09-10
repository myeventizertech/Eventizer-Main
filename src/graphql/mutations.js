/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCoupon = /* GraphQL */ `
  mutation CreateCoupon(
    $input: CreateCouponInput!
    $condition: ModelCouponConditionInput
  ) {
    createCoupon(input: $input, condition: $condition) {
      id
      code
      discount
      maxDiscount
      customCoupon
      userID
      vendorID
      createdAt
      updatedAt
    }
  }
`;
export const updateCoupon = /* GraphQL */ `
  mutation UpdateCoupon(
    $input: UpdateCouponInput!
    $condition: ModelCouponConditionInput
  ) {
    updateCoupon(input: $input, condition: $condition) {
      id
      code
      discount
      maxDiscount
      customCoupon
      userID
      vendorID
      createdAt
      updatedAt
    }
  }
`;
export const deleteCoupon = /* GraphQL */ `
  mutation DeleteCoupon(
    $input: DeleteCouponInput!
    $condition: ModelCouponConditionInput
  ) {
    deleteCoupon(input: $input, condition: $condition) {
      id
      code
      discount
      maxDiscount
      customCoupon
      userID
      vendorID
      createdAt
      updatedAt
    }
  }
`;
export const createHistory = /* GraphQL */ `
  mutation CreateHistory(
    $input: CreateHistoryInput!
    $condition: ModelHistoryConditionInput
  ) {
    createHistory(input: $input, condition: $condition) {
      id
      message
      Employee
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateHistory = /* GraphQL */ `
  mutation UpdateHistory(
    $input: UpdateHistoryInput!
    $condition: ModelHistoryConditionInput
  ) {
    updateHistory(input: $input, condition: $condition) {
      id
      message
      Employee
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteHistory = /* GraphQL */ `
  mutation DeleteHistory(
    $input: DeleteHistoryInput!
    $condition: ModelHistoryConditionInput
  ) {
    deleteHistory(input: $input, condition: $condition) {
      id
      message
      Employee
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createEmployee = /* GraphQL */ `
  mutation CreateEmployee(
    $input: CreateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    createEmployee(input: $input, condition: $condition) {
      id
      name
      designation
      profilePicture
      power
      History {
        items {
          id
          message
          Employee
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateEmployee = /* GraphQL */ `
  mutation UpdateEmployee(
    $input: UpdateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    updateEmployee(input: $input, condition: $condition) {
      id
      name
      designation
      profilePicture
      power
      History {
        items {
          id
          message
          Employee
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteEmployee = /* GraphQL */ `
  mutation DeleteEmployee(
    $input: DeleteEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    deleteEmployee(input: $input, condition: $condition) {
      id
      name
      designation
      profilePicture
      power
      History {
        items {
          id
          message
          Employee
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createBalance = /* GraphQL */ `
  mutation CreateBalance(
    $input: CreateBalanceInput!
    $condition: ModelBalanceConditionInput
  ) {
    createBalance(input: $input, condition: $condition) {
      id
      balance
      withdrawAmount
      Vendor {
        id
        firstName
        lastName
        nidFrontSide
        nidBackSide
        nidNumber
        presentLocation
        service
        phoneNumber
        email
        uploadYourPhoto
        status
        Orders {
          nextToken
        }
        PaymentRequest {
          nextToken
        }
        balanceID
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      balanceVendorId
      owner
    }
  }
`;
export const updateBalance = /* GraphQL */ `
  mutation UpdateBalance(
    $input: UpdateBalanceInput!
    $condition: ModelBalanceConditionInput
  ) {
    updateBalance(input: $input, condition: $condition) {
      id
      balance
      withdrawAmount
      Vendor {
        id
        firstName
        lastName
        nidFrontSide
        nidBackSide
        nidNumber
        presentLocation
        service
        phoneNumber
        email
        uploadYourPhoto
        status
        Orders {
          nextToken
        }
        PaymentRequest {
          nextToken
        }
        balanceID
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      balanceVendorId
      owner
    }
  }
`;
export const deleteBalance = /* GraphQL */ `
  mutation DeleteBalance(
    $input: DeleteBalanceInput!
    $condition: ModelBalanceConditionInput
  ) {
    deleteBalance(input: $input, condition: $condition) {
      id
      balance
      withdrawAmount
      Vendor {
        id
        firstName
        lastName
        nidFrontSide
        nidBackSide
        nidNumber
        presentLocation
        service
        phoneNumber
        email
        uploadYourPhoto
        status
        Orders {
          nextToken
        }
        PaymentRequest {
          nextToken
        }
        balanceID
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      balanceVendorId
      owner
    }
  }
`;
export const createPaymentRequest = /* GraphQL */ `
  mutation CreatePaymentRequest(
    $input: CreatePaymentRequestInput!
    $condition: ModelPaymentRequestConditionInput
  ) {
    createPaymentRequest(input: $input, condition: $condition) {
      id
      balanceAmount
      phoneNumber
      method
      bankName
      bankAcNo
      acHolderName
      acBranch
      type
      status
      vendorID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updatePaymentRequest = /* GraphQL */ `
  mutation UpdatePaymentRequest(
    $input: UpdatePaymentRequestInput!
    $condition: ModelPaymentRequestConditionInput
  ) {
    updatePaymentRequest(input: $input, condition: $condition) {
      id
      balanceAmount
      phoneNumber
      method
      bankName
      bankAcNo
      acHolderName
      acBranch
      type
      status
      vendorID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deletePaymentRequest = /* GraphQL */ `
  mutation DeletePaymentRequest(
    $input: DeletePaymentRequestInput!
    $condition: ModelPaymentRequestConditionInput
  ) {
    deletePaymentRequest(input: $input, condition: $condition) {
      id
      balanceAmount
      phoneNumber
      method
      bankName
      bankAcNo
      acHolderName
      acBranch
      type
      status
      vendorID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createError = /* GraphQL */ `
  mutation CreateError(
    $input: CreateErrorInput!
    $condition: ModelErrorConditionInput
  ) {
    createError(input: $input, condition: $condition) {
      id
      errorDetails
      errorTime
      status
      vendorID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateError = /* GraphQL */ `
  mutation UpdateError(
    $input: UpdateErrorInput!
    $condition: ModelErrorConditionInput
  ) {
    updateError(input: $input, condition: $condition) {
      id
      errorDetails
      errorTime
      status
      vendorID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteError = /* GraphQL */ `
  mutation DeleteError(
    $input: DeleteErrorInput!
    $condition: ModelErrorConditionInput
  ) {
    deleteError(input: $input, condition: $condition) {
      id
      errorDetails
      errorTime
      status
      vendorID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createPlan = /* GraphQL */ `
  mutation CreatePlan(
    $input: CreatePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    createPlan(input: $input, condition: $condition) {
      id
      brief
      name
      companyName
      phoneNumber
      email
      eventTitle
      eventLocation
      eventDate
      totalBudget
      fileLink
      status
      description
      userID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updatePlan = /* GraphQL */ `
  mutation UpdatePlan(
    $input: UpdatePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    updatePlan(input: $input, condition: $condition) {
      id
      brief
      name
      companyName
      phoneNumber
      email
      eventTitle
      eventLocation
      eventDate
      totalBudget
      fileLink
      status
      description
      userID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deletePlan = /* GraphQL */ `
  mutation DeletePlan(
    $input: DeletePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    deletePlan(input: $input, condition: $condition) {
      id
      brief
      name
      companyName
      phoneNumber
      email
      eventTitle
      eventLocation
      eventDate
      totalBudget
      fileLink
      status
      description
      userID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createOrders = /* GraphQL */ `
  mutation CreateOrders(
    $input: CreateOrdersInput!
    $condition: ModelOrdersConditionInput
  ) {
    createOrders(input: $input, condition: $condition) {
      id
      address
      name
      phoneNumberUser
      phoneNumberVendor
      Link
      package
      totalPayment
      city
      start
      end
      total
      discount
      initialPayment
      duePayment
      status
      bookedDay
      title
      vendorID
      userID
      packageName
      reviewID
      notes
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateOrders = /* GraphQL */ `
  mutation UpdateOrders(
    $input: UpdateOrdersInput!
    $condition: ModelOrdersConditionInput
  ) {
    updateOrders(input: $input, condition: $condition) {
      id
      address
      name
      phoneNumberUser
      phoneNumberVendor
      Link
      package
      totalPayment
      city
      start
      end
      total
      discount
      initialPayment
      duePayment
      status
      bookedDay
      title
      vendorID
      userID
      packageName
      reviewID
      notes
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteOrders = /* GraphQL */ `
  mutation DeleteOrders(
    $input: DeleteOrdersInput!
    $condition: ModelOrdersConditionInput
  ) {
    deleteOrders(input: $input, condition: $condition) {
      id
      address
      name
      phoneNumberUser
      phoneNumberVendor
      Link
      package
      totalPayment
      city
      start
      end
      total
      discount
      initialPayment
      duePayment
      status
      bookedDay
      title
      vendorID
      userID
      packageName
      reviewID
      notes
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createReview = /* GraphQL */ `
  mutation CreateReview(
    $input: CreateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    createReview(input: $input, condition: $condition) {
      id
      description
      valueForMoney
      service
      behaviour
      average
      userPicture
      userName
      photographyID
      cinematographyID
      userID
      rentalID
      brandpromoterID
      decorationID
      printingpressID
      giftitemsID
      mehediartistID
      makeupartistID
      djmusicianID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateReview = /* GraphQL */ `
  mutation UpdateReview(
    $input: UpdateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    updateReview(input: $input, condition: $condition) {
      id
      description
      valueForMoney
      service
      behaviour
      average
      userPicture
      userName
      photographyID
      cinematographyID
      userID
      rentalID
      brandpromoterID
      decorationID
      printingpressID
      giftitemsID
      mehediartistID
      makeupartistID
      djmusicianID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteReview = /* GraphQL */ `
  mutation DeleteReview(
    $input: DeleteReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    deleteReview(input: $input, condition: $condition) {
      id
      description
      valueForMoney
      service
      behaviour
      average
      userPicture
      userName
      photographyID
      cinematographyID
      userID
      rentalID
      brandpromoterID
      decorationID
      printingpressID
      giftitemsID
      mehediartistID
      makeupartistID
      djmusicianID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createVendor = /* GraphQL */ `
  mutation CreateVendor(
    $input: CreateVendorInput!
    $condition: ModelVendorConditionInput
  ) {
    createVendor(input: $input, condition: $condition) {
      id
      firstName
      lastName
      nidFrontSide
      nidBackSide
      nidNumber
      presentLocation
      service
      phoneNumber
      email
      uploadYourPhoto
      status
      Orders {
        items {
          id
          address
          name
          phoneNumberUser
          phoneNumberVendor
          Link
          package
          totalPayment
          city
          start
          end
          total
          discount
          initialPayment
          duePayment
          status
          bookedDay
          title
          vendorID
          userID
          packageName
          reviewID
          notes
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      PaymentRequest {
        items {
          id
          balanceAmount
          phoneNumber
          method
          bankName
          bankAcNo
          acHolderName
          acBranch
          type
          status
          vendorID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      balanceID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateVendor = /* GraphQL */ `
  mutation UpdateVendor(
    $input: UpdateVendorInput!
    $condition: ModelVendorConditionInput
  ) {
    updateVendor(input: $input, condition: $condition) {
      id
      firstName
      lastName
      nidFrontSide
      nidBackSide
      nidNumber
      presentLocation
      service
      phoneNumber
      email
      uploadYourPhoto
      status
      Orders {
        items {
          id
          address
          name
          phoneNumberUser
          phoneNumberVendor
          Link
          package
          totalPayment
          city
          start
          end
          total
          discount
          initialPayment
          duePayment
          status
          bookedDay
          title
          vendorID
          userID
          packageName
          reviewID
          notes
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      PaymentRequest {
        items {
          id
          balanceAmount
          phoneNumber
          method
          bankName
          bankAcNo
          acHolderName
          acBranch
          type
          status
          vendorID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      balanceID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteVendor = /* GraphQL */ `
  mutation DeleteVendor(
    $input: DeleteVendorInput!
    $condition: ModelVendorConditionInput
  ) {
    deleteVendor(input: $input, condition: $condition) {
      id
      firstName
      lastName
      nidFrontSide
      nidBackSide
      nidNumber
      presentLocation
      service
      phoneNumber
      email
      uploadYourPhoto
      status
      Orders {
        items {
          id
          address
          name
          phoneNumberUser
          phoneNumberVendor
          Link
          package
          totalPayment
          city
          start
          end
          total
          discount
          initialPayment
          duePayment
          status
          bookedDay
          title
          vendorID
          userID
          packageName
          reviewID
          notes
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      PaymentRequest {
        items {
          id
          balanceAmount
          phoneNumber
          method
          bankName
          bankAcNo
          acHolderName
          acBranch
          type
          status
          vendorID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      balanceID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      address
      phoneNumber
      email
      nidNumber
      profilePicture
      status
      Orders {
        items {
          id
          address
          name
          phoneNumberUser
          phoneNumberVendor
          Link
          package
          totalPayment
          city
          start
          end
          total
          discount
          initialPayment
          duePayment
          status
          bookedDay
          title
          vendorID
          userID
          packageName
          reviewID
          notes
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      Plan {
        items {
          id
          brief
          name
          companyName
          phoneNumber
          email
          eventTitle
          eventLocation
          eventDate
          totalBudget
          fileLink
          status
          description
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      Reviews {
        items {
          id
          description
          valueForMoney
          service
          behaviour
          average
          userPicture
          userName
          photographyID
          cinematographyID
          userID
          rentalID
          brandpromoterID
          decorationID
          printingpressID
          giftitemsID
          mehediartistID
          makeupartistID
          djmusicianID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      address
      phoneNumber
      email
      nidNumber
      profilePicture
      status
      Orders {
        items {
          id
          address
          name
          phoneNumberUser
          phoneNumberVendor
          Link
          package
          totalPayment
          city
          start
          end
          total
          discount
          initialPayment
          duePayment
          status
          bookedDay
          title
          vendorID
          userID
          packageName
          reviewID
          notes
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      Plan {
        items {
          id
          brief
          name
          companyName
          phoneNumber
          email
          eventTitle
          eventLocation
          eventDate
          totalBudget
          fileLink
          status
          description
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      Reviews {
        items {
          id
          description
          valueForMoney
          service
          behaviour
          average
          userPicture
          userName
          photographyID
          cinematographyID
          userID
          rentalID
          brandpromoterID
          decorationID
          printingpressID
          giftitemsID
          mehediartistID
          makeupartistID
          djmusicianID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      address
      phoneNumber
      email
      nidNumber
      profilePicture
      status
      Orders {
        items {
          id
          address
          name
          phoneNumberUser
          phoneNumberVendor
          Link
          package
          totalPayment
          city
          start
          end
          total
          discount
          initialPayment
          duePayment
          status
          bookedDay
          title
          vendorID
          userID
          packageName
          reviewID
          notes
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      Plan {
        items {
          id
          brief
          name
          companyName
          phoneNumber
          email
          eventTitle
          eventLocation
          eventDate
          totalBudget
          fileLink
          status
          description
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      Reviews {
        items {
          id
          description
          valueForMoney
          service
          behaviour
          average
          userPicture
          userName
          photographyID
          cinematographyID
          userID
          rentalID
          brandpromoterID
          decorationID
          printingpressID
          giftitemsID
          mehediartistID
          makeupartistID
          djmusicianID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createCinematography = /* GraphQL */ `
  mutation CreateCinematography(
    $input: CreateCinematographyInput!
    $condition: ModelCinematographyConditionInput
  ) {
    createCinematography(input: $input, condition: $condition) {
      id
      spealiziedInFIlter
      serviceloactionFIlter
      specializedIn
      title
      deviceName
      yearsOfExperience
      serviceLocation
      presentLocation
      portfolioLink
      email
      portfolioImage
      detailsAboutYou
      uploadYourPhoto
      rating
      isConfirmed
      Reviews {
        items {
          id
          description
          valueForMoney
          service
          behaviour
          average
          userPicture
          userName
          photographyID
          cinematographyID
          userID
          rentalID
          brandpromoterID
          decorationID
          printingpressID
          giftitemsID
          mehediartistID
          makeupartistID
          djmusicianID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      phoneNumber
      packages
      status
      eventsCompleted
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateCinematography = /* GraphQL */ `
  mutation UpdateCinematography(
    $input: UpdateCinematographyInput!
    $condition: ModelCinematographyConditionInput
  ) {
    updateCinematography(input: $input, condition: $condition) {
      id
      spealiziedInFIlter
      serviceloactionFIlter
      specializedIn
      title
      deviceName
      yearsOfExperience
      serviceLocation
      presentLocation
      portfolioLink
      email
      portfolioImage
      detailsAboutYou
      uploadYourPhoto
      rating
      isConfirmed
      Reviews {
        items {
          id
          description
          valueForMoney
          service
          behaviour
          average
          userPicture
          userName
          photographyID
          cinematographyID
          userID
          rentalID
          brandpromoterID
          decorationID
          printingpressID
          giftitemsID
          mehediartistID
          makeupartistID
          djmusicianID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      phoneNumber
      packages
      status
      eventsCompleted
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteCinematography = /* GraphQL */ `
  mutation DeleteCinematography(
    $input: DeleteCinematographyInput!
    $condition: ModelCinematographyConditionInput
  ) {
    deleteCinematography(input: $input, condition: $condition) {
      id
      spealiziedInFIlter
      serviceloactionFIlter
      specializedIn
      title
      deviceName
      yearsOfExperience
      serviceLocation
      presentLocation
      portfolioLink
      email
      portfolioImage
      detailsAboutYou
      uploadYourPhoto
      rating
      isConfirmed
      Reviews {
        items {
          id
          description
          valueForMoney
          service
          behaviour
          average
          userPicture
          userName
          photographyID
          cinematographyID
          userID
          rentalID
          brandpromoterID
          decorationID
          printingpressID
          giftitemsID
          mehediartistID
          makeupartistID
          djmusicianID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      phoneNumber
      packages
      status
      eventsCompleted
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createPhotography = /* GraphQL */ `
  mutation CreatePhotography(
    $input: CreatePhotographyInput!
    $condition: ModelPhotographyConditionInput
  ) {
    createPhotography(input: $input, condition: $condition) {
      id
      specializedIn
      spealiziedInFIlter
      serviceloactionFIlter
      presentLocation
      title
      deviceName
      yearsOfExperience
      serviceLocation
      portfolioLink
      portfolioImage
      uploadYourPhoto
      detailsAboutYou
      rating
      isConfirmed
      Reviews {
        items {
          id
          description
          valueForMoney
          service
          behaviour
          average
          userPicture
          userName
          photographyID
          cinematographyID
          userID
          rentalID
          brandpromoterID
          decorationID
          printingpressID
          giftitemsID
          mehediartistID
          makeupartistID
          djmusicianID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      phoneNumber
      packages
      status
      email
      eventsCompleted
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updatePhotography = /* GraphQL */ `
  mutation UpdatePhotography(
    $input: UpdatePhotographyInput!
    $condition: ModelPhotographyConditionInput
  ) {
    updatePhotography(input: $input, condition: $condition) {
      id
      specializedIn
      spealiziedInFIlter
      serviceloactionFIlter
      presentLocation
      title
      deviceName
      yearsOfExperience
      serviceLocation
      portfolioLink
      portfolioImage
      uploadYourPhoto
      detailsAboutYou
      rating
      isConfirmed
      Reviews {
        items {
          id
          description
          valueForMoney
          service
          behaviour
          average
          userPicture
          userName
          photographyID
          cinematographyID
          userID
          rentalID
          brandpromoterID
          decorationID
          printingpressID
          giftitemsID
          mehediartistID
          makeupartistID
          djmusicianID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      phoneNumber
      packages
      status
      email
      eventsCompleted
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deletePhotography = /* GraphQL */ `
  mutation DeletePhotography(
    $input: DeletePhotographyInput!
    $condition: ModelPhotographyConditionInput
  ) {
    deletePhotography(input: $input, condition: $condition) {
      id
      specializedIn
      spealiziedInFIlter
      serviceloactionFIlter
      presentLocation
      title
      deviceName
      yearsOfExperience
      serviceLocation
      portfolioLink
      portfolioImage
      uploadYourPhoto
      detailsAboutYou
      rating
      isConfirmed
      Reviews {
        items {
          id
          description
          valueForMoney
          service
          behaviour
          average
          userPicture
          userName
          photographyID
          cinematographyID
          userID
          rentalID
          brandpromoterID
          decorationID
          printingpressID
          giftitemsID
          mehediartistID
          makeupartistID
          djmusicianID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      phoneNumber
      packages
      status
      email
      eventsCompleted
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createDJMusician = /* GraphQL */ `
  mutation CreateDJMusician(
    $input: CreateDJMusicianInput!
    $condition: ModelDJMusicianConditionInput
  ) {
    createDJMusician(input: $input, condition: $condition) {
      id
      specializedIn
      title
      spealiziedInFIlter
      serviceloactionFIlter
      presentLocation
      yearsOfExperience
      serviceLocation
      portfolioLink
      portfolioImage
      uploadYourPhoto
      detailsAboutYou
      rating
      isConfirmed
      phoneNumber
      teamMember
      packages
      Reviews {
        items {
          id
          description
          valueForMoney
          service
          behaviour
          average
          userPicture
          userName
          photographyID
          cinematographyID
          userID
          rentalID
          brandpromoterID
          decorationID
          printingpressID
          giftitemsID
          mehediartistID
          makeupartistID
          djmusicianID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      status
      email
      eventsCompleted
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateDJMusician = /* GraphQL */ `
  mutation UpdateDJMusician(
    $input: UpdateDJMusicianInput!
    $condition: ModelDJMusicianConditionInput
  ) {
    updateDJMusician(input: $input, condition: $condition) {
      id
      specializedIn
      title
      spealiziedInFIlter
      serviceloactionFIlter
      presentLocation
      yearsOfExperience
      serviceLocation
      portfolioLink
      portfolioImage
      uploadYourPhoto
      detailsAboutYou
      rating
      isConfirmed
      phoneNumber
      teamMember
      packages
      Reviews {
        items {
          id
          description
          valueForMoney
          service
          behaviour
          average
          userPicture
          userName
          photographyID
          cinematographyID
          userID
          rentalID
          brandpromoterID
          decorationID
          printingpressID
          giftitemsID
          mehediartistID
          makeupartistID
          djmusicianID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      status
      email
      eventsCompleted
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteDJMusician = /* GraphQL */ `
  mutation DeleteDJMusician(
    $input: DeleteDJMusicianInput!
    $condition: ModelDJMusicianConditionInput
  ) {
    deleteDJMusician(input: $input, condition: $condition) {
      id
      specializedIn
      title
      spealiziedInFIlter
      serviceloactionFIlter
      presentLocation
      yearsOfExperience
      serviceLocation
      portfolioLink
      portfolioImage
      uploadYourPhoto
      detailsAboutYou
      rating
      isConfirmed
      phoneNumber
      teamMember
      packages
      Reviews {
        items {
          id
          description
          valueForMoney
          service
          behaviour
          average
          userPicture
          userName
          photographyID
          cinematographyID
          userID
          rentalID
          brandpromoterID
          decorationID
          printingpressID
          giftitemsID
          mehediartistID
          makeupartistID
          djmusicianID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      status
      email
      eventsCompleted
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createMakeupArtist = /* GraphQL */ `
  mutation CreateMakeupArtist(
    $input: CreateMakeupArtistInput!
    $condition: ModelMakeupArtistConditionInput
  ) {
    createMakeupArtist(input: $input, condition: $condition) {
      id
      title
      yearsOfExperience
      spealiziedInFIlter
      serviceloactionFIlter
      serviceLocation
      portfolioLink
      portfolioImage
      presentLocation
      uploadYourPhoto
      detailsAboutYou
      rating
      isConfirmed
      phoneNumber
      teamMember
      packages
      Reviews {
        items {
          id
          description
          valueForMoney
          service
          behaviour
          average
          userPicture
          userName
          photographyID
          cinematographyID
          userID
          rentalID
          brandpromoterID
          decorationID
          printingpressID
          giftitemsID
          mehediartistID
          makeupartistID
          djmusicianID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      status
      email
      eventsCompleted
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateMakeupArtist = /* GraphQL */ `
  mutation UpdateMakeupArtist(
    $input: UpdateMakeupArtistInput!
    $condition: ModelMakeupArtistConditionInput
  ) {
    updateMakeupArtist(input: $input, condition: $condition) {
      id
      title
      yearsOfExperience
      spealiziedInFIlter
      serviceloactionFIlter
      serviceLocation
      portfolioLink
      portfolioImage
      presentLocation
      uploadYourPhoto
      detailsAboutYou
      rating
      isConfirmed
      phoneNumber
      teamMember
      packages
      Reviews {
        items {
          id
          description
          valueForMoney
          service
          behaviour
          average
          userPicture
          userName
          photographyID
          cinematographyID
          userID
          rentalID
          brandpromoterID
          decorationID
          printingpressID
          giftitemsID
          mehediartistID
          makeupartistID
          djmusicianID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      status
      email
      eventsCompleted
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteMakeupArtist = /* GraphQL */ `
  mutation DeleteMakeupArtist(
    $input: DeleteMakeupArtistInput!
    $condition: ModelMakeupArtistConditionInput
  ) {
    deleteMakeupArtist(input: $input, condition: $condition) {
      id
      title
      yearsOfExperience
      spealiziedInFIlter
      serviceloactionFIlter
      serviceLocation
      portfolioLink
      portfolioImage
      presentLocation
      uploadYourPhoto
      detailsAboutYou
      rating
      isConfirmed
      phoneNumber
      teamMember
      packages
      Reviews {
        items {
          id
          description
          valueForMoney
          service
          behaviour
          average
          userPicture
          userName
          photographyID
          cinematographyID
          userID
          rentalID
          brandpromoterID
          decorationID
          printingpressID
          giftitemsID
          mehediartistID
          makeupartistID
          djmusicianID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      status
      email
      eventsCompleted
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createMehediArtist = /* GraphQL */ `
  mutation CreateMehediArtist(
    $input: CreateMehediArtistInput!
    $condition: ModelMehediArtistConditionInput
  ) {
    createMehediArtist(input: $input, condition: $condition) {
      id
      title
      yearsOfExperience
      spealiziedInFIlter
      serviceloactionFIlter
      serviceLocation
      presentLocation
      packages
      portfolioLink
      portfolioImage
      uploadYourPhoto
      detailsAboutYou
      rating
      isConfirmed
      phoneNumber
      teamMember
      Reviews {
        items {
          id
          description
          valueForMoney
          service
          behaviour
          average
          userPicture
          userName
          photographyID
          cinematographyID
          userID
          rentalID
          brandpromoterID
          decorationID
          printingpressID
          giftitemsID
          mehediartistID
          makeupartistID
          djmusicianID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      status
      email
      eventsCompleted
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateMehediArtist = /* GraphQL */ `
  mutation UpdateMehediArtist(
    $input: UpdateMehediArtistInput!
    $condition: ModelMehediArtistConditionInput
  ) {
    updateMehediArtist(input: $input, condition: $condition) {
      id
      title
      yearsOfExperience
      spealiziedInFIlter
      serviceloactionFIlter
      serviceLocation
      presentLocation
      packages
      portfolioLink
      portfolioImage
      uploadYourPhoto
      detailsAboutYou
      rating
      isConfirmed
      phoneNumber
      teamMember
      Reviews {
        items {
          id
          description
          valueForMoney
          service
          behaviour
          average
          userPicture
          userName
          photographyID
          cinematographyID
          userID
          rentalID
          brandpromoterID
          decorationID
          printingpressID
          giftitemsID
          mehediartistID
          makeupartistID
          djmusicianID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      status
      email
      eventsCompleted
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteMehediArtist = /* GraphQL */ `
  mutation DeleteMehediArtist(
    $input: DeleteMehediArtistInput!
    $condition: ModelMehediArtistConditionInput
  ) {
    deleteMehediArtist(input: $input, condition: $condition) {
      id
      title
      yearsOfExperience
      spealiziedInFIlter
      serviceloactionFIlter
      serviceLocation
      presentLocation
      packages
      portfolioLink
      portfolioImage
      uploadYourPhoto
      detailsAboutYou
      rating
      isConfirmed
      phoneNumber
      teamMember
      Reviews {
        items {
          id
          description
          valueForMoney
          service
          behaviour
          average
          userPicture
          userName
          photographyID
          cinematographyID
          userID
          rentalID
          brandpromoterID
          decorationID
          printingpressID
          giftitemsID
          mehediartistID
          makeupartistID
          djmusicianID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      status
      email
      eventsCompleted
      createdAt
      updatedAt
      owner
    }
  }
`;
