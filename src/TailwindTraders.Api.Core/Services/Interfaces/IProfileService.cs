﻿using Profile = TailwindTraders.Api.Core.Models.Implementations.Dao.Profile;

namespace TailwindTraders.Api.Core.Services.Interfaces;

internal interface IProfileService
{
    IEnumerable<Profile> GetAllProfiles();

    Profile GetProfile(string email);
}